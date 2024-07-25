import { Button } from "frames.js/next";
import { frames } from "../frames";
export const runtime = "nodejs";

const handleRequest = frames(async (ctx) => {
  return {
    image: "https://i.ibb.co/f8tvk88/gm.png",
    buttons: [],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
