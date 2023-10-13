const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname + "/public")))

app.use(cors());
const PORT = 8000;
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CSE305",
  database: "minor_project",
});

app.post("/signInDetails", (req, res) => {
  connection.connect(function (err) {
    const firstname = req.body.firstName;
    const secondname = req.body.secondName;
    const email = req.body.email;
    const password = req.body.password;
    const id = req.body.id;

    const query = `insert into signindetails values('${firstname}', '${secondname}', '${email}', '${password}','${id}')`;
    //if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/examinationData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into examination values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/libraryData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into library values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/sportsData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into sports values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/hostelData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into hostel values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/placementcellData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into placementcell values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/scholorshipData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into scholorship values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.post("/networkadministrationData", (req, res) => {
  connection.connect(function (err) {
    const year = req.body.year;
    const due = req.body.due;
    const branch = req.body.branch;
    const status = req.body.status;
    const semister = req.body.semister;
    const id = req.body.id;
    const cost = req.body.cost;

    const query = `insert into networkadministration values('${id}', '${year}', '${branch}', '${semister}','${status}', '${cost}', '${due}')`;
    // if(err) throw err;
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ result });
    });
  });
});

app.get("/authenticationDetails", (req, res) => {
  connection.connect(function (err) {
    const dataQuey = "select * from signindetails";

    //if(err) throw err;
    connection.query(dataQuey, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ loginData: result });
    });
  });
});

app.get("/adminAuthentication", (req, res) => {
  connection.connect(function (err) {
    const dataQuey1 = "select * from admindetails";

    // if(err) throw err;
    connection.query(dataQuey1, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ adminData: result });
    });
  });
});

app.get("/userExamination/:examinationId", (req, res) => {
  const examinationId = req.params.examinationId;
  connection.connect(function (err) {
    const examinationQuery = `select * from examination where id='${examinationId}'`;

    // if(err) throw err;
    connection.query(examinationQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ examinationData: result });
    });
  });
});

app.get("/userLibrary/:libraryId", (req, res) => {
  const libraryId = req.params.libraryId;
  connection.connect(function (err) {
    const libraryQuery = `select * from library where id='${libraryId}'`;

    // if(err) throw err;
    connection.query(libraryQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ libraryData: result });
    });
  });
});

app.get("/userSports/:sportsId", (req, res) => {
  const sportsId = req.params.sportsId;
  connection.connect(function (err) {
    const sportsQuery = `select * from sports where id='${sportsId}'`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ sportsData: result });
    });
  });
});

app.get("/userHostel/:hostelId", (req, res) => {
  const hostelId = req.params.hostelId;
  connection.connect(function (err) {
    const hostelQuery = `select * from hostel where id='${hostelId}'`;

    // if(err) throw err;
    connection.query(hostelQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ hostelData: result });
    });
  });
});

app.get("/userPlacementCell/:placemntCellId", (req, res) => {
  const placemntCellId = req.params.placemntCellId;
  connection.connect(function (err) {
    const placementcellQuery = `select * from placementcell where id='${placemntCellId}'`;

    // if(err) throw err;
    connection.query(placementcellQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ placementCellData: result });
    });
  });
});

app.get("/userSholorship/:sholorshipId", (req, res) => {
  const scholorshipId = req.params.sholorshipId;
  connection.connect(function (err) {
    const scholorshipQuery = `select * from scholorship where id='${scholorshipId}'`;

    // if(err) throw err;
    connection.query(scholorshipQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ scholorshipData: result });
    });
  });
});

app.get("/userNetwork/:networkId", (req, res) => {
  const networkId = req.params.networkId;
  connection.connect(function (err) {
    const networkQuery = `select * from networkadministration where id='${networkId}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ networkData: result });
    });
  });
});

app.delete("/deleteUserExamination", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from examination where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteExaminationkData: result });
    });
  });
})

app.delete("/deleteUserLibrary", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from library where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteLibraryData: result });
    });
  });
})

app.delete("/deleteUserSports", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from sports where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteSportsData: result });
    });
  });
})

app.delete("/deleteUserHostel", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from hostel where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteHostelData: result });
    });
  });
})

app.delete("/deleteUserPlacementcell", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from placementcell where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deletePlacementcellData: result });
    });
  });
})

app.delete("/deleteUserNetworkAdmin", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from  networkadministration where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteNetworkAdminData: result });
    });
  });
})


app.delete("/deleteUserScholorship", (req,res) => {
  const id = req.body.id;
  const due = req.body.due;
  connection.connect(function (err) {
    const networkQuery = `delete from scholorship where id='${id}' and due='${due}'`;

    // if(err) throw err;
    connection.query(networkQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ deleteExaminationkData: result });
    });
  });
})

app.get("/examinationTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from examination`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ examinationTableData: result });
    });
  });
});

app.get("/libraryTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from library`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ libraryTableData: result });
    });
  });
});

app.get("/sportsTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from sports`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ sportsTableData: result });
    });
  });
});

app.get("/scholorshipTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from scholorship`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ scholorshipTableData: result });
    });
  });
});

app.get("/hostelTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from hostel`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ hostelTableData: result });
    });
  });
});

app.get("/placementcellTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from placementcell`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ placementcellTableDta: result });
    });
  });
});

app.get("/networkTable", (req, res) => {
  connection.connect(function (err) {
    const sportsQuery = `select * from networkadministration`;

    // if(err) throw err;
    connection.query(sportsQuery, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ networkadministrationTableData: result });
    });
  });
});



app.put("/resetUserPassword", (req, res) => {
  connection.connect(function (err) {
    const id = req.body.id;
    const resetNewPassword = req.body.resetNewPassword;
    const Query = `update signindetails set password='${resetNewPassword}' where id='${id}'`;

    // if(err) throw err;
    connection.query(Query, function (err, result, fields) {
      if (err) throw err;
      return res.status(220).send({ resetData: result });
    });
  });
});

app.get("/userInfo/:id", (req, res) => {
  const id = req.params.id;
  connection.connect(function (err) {
    const Query = `select * from signindetails where id='${id}'`;

    // if(err) throw err;
    connection.query(Query, function (err, result, fields) {
      if (err) throw err;
      return res.status(200).send({ infoData: result });
    });
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occured");
  } else {
    console.log(`server is running at port ----${PORT}`);
  }
});
