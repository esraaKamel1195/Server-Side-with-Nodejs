import { Request, Response } from "express";
const Registeration = require("../models/registerations-model");
const Client = require("../models/clients-model");

exports.List = async (request: Request, response: Response, next: any) => {
  try {
    return new Promise((resolve: any, reject: any) => {
      Registeration.find({})
        .then((list: any) => {
          console.log(list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.GetItemById = async (request: any, response: Response, next: any) => {
  try {
    return new Promise((resolve: any, reject: any) => {
      Client.findOne({ _id: request.itemId })
      .then((list: any) => {
        console.log("After update", list);
        resolve(list);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  } catch (error: any) {
    next(error);
  }
};

exports.Add = async (request: Request, response: Response, next: any) => {
  try {
    console.log(request);
    return new Promise((resolve: any, reject: any) => {
      Registeration.create(request)
        .then((list: any) => {
          console.log("After create", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.Edit = async (
  itemParams: any,
  itemBody: any,
  response: Response,
  next: any
) => {
  try {
    console.log(itemParams);
    console.log(itemBody);
    return new Promise((resolve: any, reject: any) => {
      Registeration.updateOne({ _id: itemParams.itemId }, itemBody)
        .then((list: any) => {
          console.log("After update", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.Delete = async (request: any, response: Response, next: any) => {
  try {
    console.log(request);
    return new Promise((resolve: any, reject: any) => {
      Registeration.deleteOne({ _id: request.itemId }, request)
        .then((list: any) => {
          console.log("After delete", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.ClientList = async (
  request: Request,
  response: Response,
  next: any
) => {
  try {
    return new Promise((resolve: any, reject: any) => {
      Client.find({})
        .then((list: any) => {
          console.log(list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.AddClient = async (request: Request, response: Response, next: any) => {
  try {
    console.log(request);
    return new Promise((resolve: any, reject: any) => {
      Client.create(request)
        .then((list: any) => {
          console.log("After create", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.EditClient = async (
  itemParams: any,
  itemBody: any,
  response: Response,
  next: any
) => {
  try {
    console.log(itemParams);
    console.log(itemBody);
    return new Promise((resolve: any, reject: any) => {
      Client.updateOne({ _id: itemParams.itemId }, itemBody)
        .then((list: any) => {
          console.log("After update", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};

exports.DeleteClient = async (request: any, response: Response, next: any) => {
  try {
    console.log(request);
    return new Promise((resolve: any, reject: any) => {
      Client.deleteOne({ _id: request.itemId }, request)
        .then((list: any) => {
          console.log("After delete", list);
          resolve(list);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  } catch (error: any) {
    next(error);
  }
};
