
var MyConfig = {};

//Nhận 1 trong các giá trị sau: test | production
var environment = "production";

if (environment == "test") {

  MyConfig.language = "vi"; //vi, en

  //setting origin/path
  MyConfig.basePath = "";

  MyConfig.host = "http://localhost:9090";

} else if (environment == "production") {

  MyConfig.language = "vi"; //vi, en

  //setting origin/path
  MyConfig.basePath = "";

  MyConfig.host = "http://123.16.67.116:9090";

}
