import { FeasibilityApi } from "@natomas-org/villa-nexus-client-ts-fetch"
import { NextRequest, NextResponse } from "next/server"
import { Configuration as NexusConfig } from "@natomas-org/villa-nexus-client-ts-fetch";

export async function GET(req: NextRequest) {
  const token = req.cookies.valueOf("AuthToken").toString().split("=")[1]
  const idToken = JSON.parse(atob(token.split(".")[1])).id_token
  const cfg = await getNexusAuthentication(idToken)
  const client = new FeasibilityApi(cfg)
  const zips = await client.getFeasibileZips()
  return NextResponse.json(zips)
}

export const getNexusAuthentication = async (bearerToken: string) => {
  const basePath = "http://localhost:8000"
  const requestSource = "next-auth-firebase"
  return new NexusConfig({
    basePath: basePath,
    headers: {
      "request-source": requestSource,
      "x-firebase-token": bearerToken
    }
  })
}
