import { User } from "../models/user.model.js";
export const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    // this creates a new user 

    const user = new User({ name, email, password });

    // await because user waits for data
    
    await user.save();

    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  res.send("Login route");
};
export const logout = async (req, res) => {
  res.send("Logout route");
};
