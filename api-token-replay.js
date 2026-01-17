<!DOCTYPE html>
<html>
<head>
  <title>API Token Replay Demo</title>
</head>
<body>

<h2>Open Browser Console (F12)</h2>
<button onclick="run()">Run Demo</button>

<script>
function run() {

  // Step 1: Login API call
  fetch("/login")
    .then(response => response.json())
    .then(data => {

      // Step 2: Token received
      console.log("Access Token:", data.token);

      // Step 3: Replay request using the same token
      fetch("/profile", {
        headers: {
          Authorization: "Bearer " + data.token
        }
      })
      .then(response => response.json())
      .then(profile => {
        console.log("Protected Profile Data:", profile);
      });

    });
}
</script>

</body>
</html>
