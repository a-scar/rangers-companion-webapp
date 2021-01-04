import { encryptSession, getSession } from "../../lib/iron";
import { connectToDatabase } from "../../lib/mongo.utility";
import { setTokenCookie } from "../../lib/auth-cookies";
import Player from "../../models/Player";

let db;

export default async function player(req, res) {
  if (!db) {
    await connectToDatabase();
  }

  // async function resetCookies(session) {
  //   const token = await encryptSession(session);
  //   setTokenCookie(res, token);
  // }

  // read and decrypt the cookie
  const session = await getSession(req);

  if (session) {
    try {
      const player = await Player.findOne({ email: `${session.email}` });
      // await resetCookies(session);
      console.log(JSON.stringify(player));
      if (!player) {
        throw new Error("Could not find player");
      }
      res.status(200).json({ player: player || null });
    } catch (error) {
      console.log("oh man I was caught");
      return res.status(401).end("Error accessing user.");
    }
  }
}

//   try {
//     const player = await Player.create(req.body);
//     /* create a new model in the database */
//     console.log("player in post" + player);
//     // await resetCookies(session);
//     res.status(201).json({ success: true, data: player });
//   } catch (error) {
//     console.log("oh man I was caught");
//     res.status(400).json({ success: false });
//   }
