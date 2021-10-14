const { users, transaction } = require("../../models");

//Add user route
exports.addUser = async (req, res) => {
  try {
    await users.create(req.body);

    res.send({
      status: "success",
      message: "Add user finished",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

//Get all data users
exports.getUsers = async (req, res) => {
  try {
    const user = await users.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      data: { users: user },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await users.findOne({
      where: { id },
      include: {
        model: transaction,
        as: "clientTransaction",
        attributes: {
          exclude: [
            "id",
            "transferProof",
            "accountNumber",
            "createdAt",
            "updatedAt",
            "remainingActive",
            "userId",
          ],
        },
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    const user = {
      ...data,
    };

    res.send({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

//update user with patch
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = {
      ...data,
    };

    await users.update(updateData, {
      where: { id },
    });

    res.send({
      status: "success",
      message: `Update user id: ${id} finished`,
      data: { user: updateData },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await users.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      data: { id: `${id}` },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};
