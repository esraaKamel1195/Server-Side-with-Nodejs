import express, { Request, Response } from "express";

/******************************* initializing *********************************/
const router = express.Router();
const {
  ClientList,
  GetItemById,
  AddClient,
  EditClient,
  DeleteClient,
} = require("../controllers/Clients-controller");

/************************************ Routes **********************************/
router.get("/", (request, response) => {
  getItemsList(request, response);
});
router.get("/:itemId", (request, response) => {
  getItemById(request, response);
});
router.post("/", (request, response) => {
  addItem(request, response);
});
router.put("/:itemId", (request, response) => {
  editItem(request, response);
});
router.delete("/:itemId", (request, response) => {
  deleteItem(request, response);
});

async function getItemsList(request: Request, response: Response) {
  console.log("Get client list route called");

  await ClientList().then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function getItemById(request: Request, response: Response) {
  console.log("Get Client By Id Route Called");

  await GetItemById(request.params).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function addItem(request: any, response: any) {
  console.log("Add new client route called");
  console.log(request.body);
  await AddClient(request.body).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function editItem(request: any, response: any) {
  console.log("Edit Client Route Called");
  console.log(request.params);
  console.log(request.body);
  await EditClient(request.params, request.body).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

async function deleteItem(request: any, response: any) {
  console.log("Delete client route called");
  console.log(request.params);
  await DeleteClient(request.params).then((data: any) => {
    console.log("data", data);
    return response.status(200).json(data);
  });
}

/************************************ Exports **********************************/
module.exports = router;
