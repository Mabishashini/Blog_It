import React, { useContext, useState, useEffect } from "react";
import "./write.css";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Alert from "../../components/Alert/Alert";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [addCatError, setAddCatError] = useState(false);

  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all categories when component mounts
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setAllCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleCheckboxChange = (event) => {
    setCategories(event.target.value);
  };

  const handleAddCategory = async () => {
    
    if (newCategory === "") {
      setAddCatError(true);
      return;
    }
    try {
      const res = await axios.post("/categories", { name: newCategory });
      console.log("Add Category Clicked")
      setAllCategories((prevCategories) => [...prevCategories, res.data]);
      setNewCategory("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || desc === "") {
      if (title === "") {
        setTitleError(true);
      }
      if (desc === "") {
        setDescError(true);
      }
      return;
    }

    const newPost = {
      username: user.username,
      title,
      desc,
      categories: categories.map((category) => category.name),
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/post", newPost);
      navigate("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write container">
      <form className="writeForm" onSubmit={handleSubmit}>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="writeImg col-12"
          />
        )}

        <div className="writeFormTopGroup ">
          <label htmlFor="fileInput">
            <span className="writeIcon">
              <AddIcon />
            </span>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => (setTitle(e.target.value), setTitleError(false))}
          />
        </div>
        <textarea
          type="text"
          className="writeInput writeText col-12 col-md-10"
          placeholder="Write your Story..."
          onChange={(e) => (setDesc(e.target.value), setDescError(false))}
        ></textarea>
        {(titleError || descError) && (
          <Alert
            type="err"
            message={"Title and post description is mandatory"}
            onClose={() => (setTitleError(false), setDescError(false))}
          ></Alert>
        )}
        <div className="categories">
          <FormControl fullWidth>
            <InputLabel>Select categories</InputLabel>
            <Select
              multiple
              value={categories}
              onChange={handleCheckboxChange}
              renderValue={(selected) =>
                selected.map((cat) => cat.name).join(", ")
              }
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 500, // Adjust the maxHeight as needed
                  },
                },
              }}
            >
              {allCategories.map((category) => (
                <MenuItem key={category._id} value={category} className="menuItem">
                  <Checkbox
                    checked={
                      categories.findIndex((cat) => cat._id === category._id) >
                      -1
                    }
                  />
                  <ListItemText primary={category.name} />
                </MenuItem>
              ))}
              </Select>
              
              <div className="add-category">
                <input
                  type="text"
                  placeholder="Add new category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="writeCheckboxInput"
                />
                <button onClick={handleAddCategory} type="button"className="writeAddicon">
                  <AddIcon />
                </button>
              </div>
              {(addCatError) && <Alert type="err" message={"Please add new Category"} onClose={() => (setAddCatError(false))} ></Alert>}
            
          </FormControl>
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};
