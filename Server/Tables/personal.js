var {con}=require('../db/mysql');
var personal=con;
  let sql = "CREATE TABLE if not exists personal(personal_details_status boolean,first_name varchar(255),middle_name varchar(255),last_name varchar(255),date_of_birth date,city_of_birth varchar(255),country_of_birth varchar(255),gender varchar(255),phone_no varchar(255),flat_room_door_block	varchar(255),landmark	varchar(255),premises_building_village	varchar(255),road_street_lane	varchar(255),area_locality_taluk	varchar(255),city_town_district	varchar(255),pin_code	varchar(255),state_ut varchar(255),username varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
  personal.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={personal};
