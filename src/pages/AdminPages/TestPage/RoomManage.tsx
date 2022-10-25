import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore"
import { getRoomApi } from "../../../redux/Reducers/roomReducer";
// import { deleteRoomAction } from "../../store/reducers/roomsListReducer";
// import { roomDetailsActions } from "../../store/reducers/roomDetailsReducer";

export default function RoomManagement(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const [searchState, setSearchState] = useState<DataType[]>([]);

  useEffect(() => {
    dispatch(getRoomApi());
    // dispatch(roomDetailsActions.handleRemoveRoomDetails(null));
  }, []);

  const { roomArray } = useSelector(
    (state: RootState) => state.roomReducer
  );

  const navigate = useNavigate();

  const [loadings, setLoadings] = useState<boolean[]>([]);
  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        navigate("/admin/room-management/create-room");
        return newLoadings;
      });
    }, 1000);
  };

  const { Search } = Input;

  interface DataType {
    key: React.Key;
    id: number;
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "1%",
    },
    {
      title: "Mã vị trí",
      dataIndex: "maViTri",
      width: "3%",
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //   ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      width: "10%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "5%",
      render: (text: string) => {
        return <img src={text} style={{ width: 70, height: 50 }} />;
      },
    },
    {
      title: "Người thuê ",
      dataIndex: "khach",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Giá tiền ",
      dataIndex: "giaTien",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "5%",
      render: (text, object) => {
        return (
          <div className="d-flex">
            <Link
              className="pl-4"
              to={`/admin/room-management/${text}/edit-room`}
            >
              <EditOutlined />
            </Link>
            <a className="pl-4">
              <DeleteOutlined
                // onClick={() => {
                //   dispatch(deleteRoomAction(parseInt(text)));
                // }}
              />
            </a>
          </div>
        );
      },
    },
  ];

  const data = roomArray?.map((ele, index) => {
    return {
      key: index + 1,
      id: ele.id,
      tenPhong: ele.tenPhong,
      khach: ele.khach,
      phongNgu: ele.phongNgu,
      giuong: ele.giuong,
      phongTam: ele.phongTam,
      moTa: ele.moTa,
      giaTien: ele.giaTien,
      mayGiat: ele.mayGiat,
      banLa: ele.banLa,
      tivi: ele.tivi,
      dieuHoa: ele.dieuHoa,
      wifi: ele.wifi,
      bep: ele.bep,
      doXe: ele.doXe,
      hoBoi: ele.hoBoi,
      banUi: ele.banUi,
      maViTri: ele.maViTri,
      hinhAnh: ele.hinhAnh,
      tuongTac: ele.id,
    };
  });

  const onSearch = (value: string) => {
    console.log(value);
    let searchData = data.filter((ele) => {
      return (
        ele.tenPhong
          .toLowerCase()
          .trim()
          .indexOf(value.toLowerCase().trim()) !== -1
      );
    });
    console.log(searchData);

    setSearchState(searchData);
  };

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Space
        style={{ width: "100%" }}
        direction="vertical"
        className="w-100 py-3"
      >
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Thêm phòng
        </Button>
        <Search
          placeholder="Nhập tên phòng cần tìm"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table
        columns={columns}
        dataSource={searchState.length > 0 ? searchState : data}
        onChange={onChange}
      />
    </>
  );
}
