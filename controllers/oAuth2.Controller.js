import { OAuth2Client } from "google-auth-library";

//nitialised client OAuth2
const client = new OAuth2Client();

async function main() {
  const oAuth2Client = await getAuthenticatedClient();
  // Make a simple request to the People API using our pre-authenticated client. The `request()` method
  // takes an GaxiosOptions object.  Visit https://github.com/JustinBeckwith/gaxios.
  const url = "https://people.googleapis.com/v1/people/me?personFields=names";
  const res = await oAuth2Client.request({ url });
  console.log(res.data);
}
