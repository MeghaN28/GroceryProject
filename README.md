# GroceryProject

Run Backend

- Navigate to the backend folder
- execute the command node index.js , ensure mongodb,express, node is installed
- paste the URI and port given on teams channel

New terminal
Run Front end

- Navigate to frontend and grocery-app-react
- npm install
- install any dependecies like router,axios etc
- npm start

We are using cloud MongoDB Atlas
https://www.mongodb.com/lp/cloud/atlas/try4-reg?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_general_prosp-brand_gic-null_amers-us_ps-all_desktop_eng_lead&utm_term=mongodb%20atlus&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415305664&adgroup=1212761796655157&msclkid=4b33fec308e812efc43e9966044099f8

- Signup and create account on MongoDB Atlas
- After that
- install the MongoDB Atlas CLI on your system.
- use this command to login to atlas via cli - atlas auth login
- after login
- atlas clusters list
- atlas clusters connect `<cluster-name>`(Will share on teams)

In to the MongoDB Atlas CLI on your system login to atlas via atlas auth login using email/Atlas account credentials.

Then you connect to the database using database user credentials (team_member1 and secure_password) to access myDatabase with readWrite privileges.(I will share on teams seperately)

Install Ollama
Then run ollama serve seperately on a tab to start the ollama server
then ai prompt request will be working
Ensure

- backend running
- ollama running
- frontend running
