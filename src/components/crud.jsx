import React, { useEffect, useState } from "react";
// import '@ant-design/v5-patch-for-react-19';
import axios from "axios";
import { Button, Input, Modal } from "antd";

import img from "./IMG_8450 1.png";
import "../App.css";

const Crud = () => {
  let api = "http://37.27.29.18:8001/api/categories";
  let [data, setData] = useState([]);

  async function get() {
    try {
      let { data } = await axios.get(api);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function delCart(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }

  let [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");

  async function adduser() {
    try {
      await axios.post(api, { name: addName });
      get();
    } catch (error) {
      console.error(error);
    }
    setaddModal(false);
  }

  let [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [idx, setidx] = useState(null);

  function openEditModal(e) {
    seteditModal(true);
    seteditName(e.name);
    setidx(e.id);
  }

  async function edituser() {
    let newCart = { name: editName, id: idx };
    try {
      await axios.put(api, newCart);
      get();
      seteditModal(false);
    } catch (error) {
      console.error(error);
    }
    seteditModal(false);
  }

  let [infoModal, setinfoModal] = useState(false);
  let [infoName, setinfoName] = useState("");

  function openinfoModal(e) {
    setinfoModal(true);
    setinfoName(e.name);
    setidx(e.id);
  }

  let [search, setSearch] = useState("");

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="my-10">
      <h1 className="font-bold text-[20px] lg:text-4xl text-center ">
        Новые поступления обуви
      </h1>

      <div className="flex gap-20 my-5 mr-5 lg:mr-20">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />

        <Button
          onClick={() => setaddModal(true)}
          color="default"
          variant="outlined"
        >
          Add New Carts
        </Button>
      </div>

      <Modal
        title="Add Carts"
        closable={{ "aria-label": "Custom Close Button" }}
        open={addModal}
        onOk={adduser}
        onCancel={() => setaddModal(false)}
      >
        <Input
          value={addName}
          onChange={(e) => setaddName(e.target.value)}
          placeholder="Name"
        />
      </Modal>

      <Modal
        title="Edit Carts"
        closable={{ "aria-label": "Custom Close Button" }}
        open={editModal}
        onOk={edituser}
        onCancel={() => seteditModal(false)}
      >
        <Input
          value={editName}
          onChange={(e) => seteditName(e.target.value)}
          placeholder="Name"
        />
      </Modal>

      <Modal
        title="Info Carts"
        closable={{ "aria-label": "Custom Close Button" }}
        open={infoModal}
        onOk={() => setinfoModal(false)}
        onCancel={() => setinfoModal(false)}
      >
        <div className="flex">
          <img className="w-2/5" src={img} alt="" />
          <ul className="list-disc ml-5">
            <li><b>name: </b>{infoName}</li>
            <li><b>id: </b>{idx}</li>
          </ul>
        </div>
      </Modal>

      <div className="my-10 flex gap-5 overflow-x-scroll scrollbar-hidden">
        {data
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .map((e) => (
            <div
              key={e.id}
              className="w-[70%] lg:w-[25%] text-center basis-auto grow-0 shrink-0 "
            >
              <img className="w-full pb-5 rounded" src={img} alt="" />
              <p className="text-[14px]">{e.name}</p>
              <p className="text-[#8E8E8E]">NIKE</p>
              <p className="pt-5">27.000 ₽</p>

              <div className="py-5 flex justify-around ">
                <Button
                  onClick={() => openEditModal(e)}
                  color="default"
                  variant="outlined"
                >
                  Edit
                </Button>

                <Button
                  onClick={() => openinfoModal(e)}
                  color="default"
                  variant="outlined"
                >
                  Info
                </Button>

                <Button
                  onClick={() => delCart(e.id)}
                  color="default"
                  variant="outlined"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-center justify-center py-5 ">
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          1/9
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <button className="bg-[#1F2A37] my-5 py-2 px-6 rounded text-white ">
          Посмотреть все
        </button>
      </div>
    </div>
  );
};

export default Crud;
