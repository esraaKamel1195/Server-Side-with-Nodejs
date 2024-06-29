import { Request, Response } from "express";
const Plan = require("../models/plans-model");

exports.List = async (request: Request, response: Response, next: any) => {
  try {
    return new Promise((resolve: any, reject: any) => {
        Plan.find({})
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
      Plan.findOne({ _id: request.itemId })
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
        Plan.create(request)
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
        Plan.updateOne({ _id: itemParams.itemId }, itemBody)
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
        Plan.deleteOne({ _id: request.itemId }, request)
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
