import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@mui/material"
import style from './adminTable.module.css'
import FormDialog from "../AdminModal/AdminModal";


interface Item {
  id: number;
  name: string;
}

function AdminTable() {
  const savedDataJSON = localStorage.getItem("BasketStore");
  const savedData: Item[] = savedDataJSON ? JSON.parse(savedDataJSON) : [];

  const [newData, setNewData] = useState([]);

  const deleteProduct = (key: any) => {
    let filteredData: any = savedData.filter((item) => item.id != key);
    setNewData(filteredData);

    localStorage.setItem("BasketStore", JSON.stringify(filteredData));

  };

  const [t, i18n] = useTranslation();
  return (
    <div className={style.container}>
    <FormDialog/>
    <TableContainer
      sx={{ width: "70%", margin: "50px auto" }}
      component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("PRODUCTS")}</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">{t("DELETE")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedData && savedData?.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">
                <DeleteForeverIcon
                  onClick={() => deleteProduct(row.id)}
                  sx={{ cursor: "pointer" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
  );
}

export default AdminTable;
