import { magic } from "../../lib/magic";
import { removeTokenCookie } from "../../lib/auth-cookies";
import { getSession } from "../../lib/iron";

export default async function logout(req, res) {
  try {
    const session = await getSession(req);
    await magic.users.logoutByIssuer(session.issuer);
    removeTokenCookie(res);
    res.writeHead(302, { Location: "/login" });
    res.end();
  } catch (error) {
    res.status(401).json({ message: "User is not logged in" });
  }
}
