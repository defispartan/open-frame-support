import { Button } from "frames.js/next";
import { frames } from "./frames";
export const runtime = "nodejs";

const handleRequest = frames(async (ctx) => {
  return {
    image: "https://i.ibb.co/SmLYSKr/openframesupport.jpg",
    buttons: [
      <Button action="post" target="/gm">
        gm
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
