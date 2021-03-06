const { transaction, users } = require("../../models");
const Joi = require("joi");

exports.addTransaction = async (req, res) => {
  try {
    const data = req.body;

    const newTrans = await transaction.create({
      accountNumber: req.body.accountNumber,
      transferProof: req.files.transferProof[0].filename,
      remainingActive: "30",
      userStatus: "Not Active",
      paymentStatus: "Pending",
      userId: req.users.id,
    });

    let transactionData = await transaction.findOne({
      where: {
        id: newTrans.id,
      },
      include: {
        model: users,
        as: "users",
        attributes: {
          exclude: ["email", "password", "role", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["transId", "userId", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        ...transactionData.dataValues,
        transferProof: process.env.FILE_PATH + transactionData.transferProof,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    let transactions = await transaction.findAll({
      include: {
        model: users,
        as: "users",
        attributes: {
          exclude: ["email", "password", "role", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: [
          "accountNumber",
          "userId",
          "transId",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    transactions = JSON.parse(JSON.stringify(transactions));

    transactions = transactions.map((data) => {
      return {
        ...data,
      };
    });

    res.send({
      status: "success",
      data: {
        transactions,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      msg: "server error",
    });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await transaction.findOne({
      where: {
        id,
      },
      include: {
        model: users,
        as: "users",
        attributes: {
          exclude: ["email", "password", "role", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["transId", "createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      transferProof: process.env.FILE_PATH + data.transferProof,
    };

    res.send({
      status: "success",
      data: {
        transaction: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      msg: "server error",
    });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    if (req.body.paymentStatus === "Approved") {
      await transaction.update(
        {
          userStatus: "Active",
          paymentStatus: req.body.paymentStatus,
        },
        { where: { id } }
      );
    } else {
      await transaction.update(
        {
          userStatus: "Not Active",
          paymentStatus: req.body.paymentStatus,
        },
        { where: { id } }
      );
    }

    let transData = await transaction.findOne({
      where: { id },
      include: {
        model: users,
        as: "users",
        attributes: {
          exclude: ["email", "password", "role", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["userId", "transId", "createdAt", "updatedAt"],
      },
    });

    transData = JSON.parse(JSON.stringify(transData));

    transData = {
      ...transData,
      transferProof: process.env.FILE_PATH + transData.transferProof,
    };

    res.send({
      status: "success",
      data: {
        transData,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      msg: "server error",
    });
  }
};
