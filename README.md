# osrm_table_api_backend

![OSRM Table API: Free and open source distance matrix API](https://blog.afi.io/content/images/size/w1600/2024/01/find-restaurant.png "OSRM Table API: Free and open source distance matrix API")

Taken from: 
- [Introduction to OSRM: Setting up osrm-backend using Docker (part 1 of 4)](https://www.afi.io/blog/introduction-to-osrm-setting-up-osrm-backend-using-docker/)
- [Hosting the OSRM API on EC2: Running osrm-backend as a web service (part 2 of 4)](https://www.afi.io/blog/hosting-the-osrm-api-on-amazon-ec2-running-osrm-backend-as-a-web-service)
- [OSRM Route API: Free turn by turn directions and polylines (part 3 of 4)](https://afi.io/blog/osrm-route-api-free-directions-api-with-turn-by-turn-directions-and-polylines)
- [OSRM Table API: Free distance matrix API (part 4 of 4)](https://afi.io/blog/osrm-table-api-free-and-open-source-distance-matrix-api/)

 How to run the app:
 1. cd into your project
 2. Create a .env file with the following parameters: 
    ```
   NODE_ENV=''
   PORT='3001'
   GOOGLE_API_KEY={GOOGLE_API_KEY}
    ```
 3. Open terminal and run `npm install` (this will install the required dependencies)
 4. Run `npm start`

Please contact afian@afi.io if you have any questions or suggestions. Pull requests are welcome.
