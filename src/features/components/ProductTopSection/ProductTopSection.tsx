import styles from "./ProductTopSection.module.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsCategory, searchProducts } from "../../services/api";

function ProductTopSection({
  onInputChange,
}: {
  onInputChange: (value: string) => void;
}) {
  const [t, i18n] = useTranslation();
  const [inputValue, setInputValue] = React.useState<string>("");
  const [age, setAge] = React.useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getAllProductsCategory,
  });

  const handleInputChange = (event: any) => {
    const value = event.target.value;

    setInputValue(value);
    onInputChange(value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    window.location.href = "/products";
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("category_product", event.target.value);

    window.location.href = newUrl.toString();
  };

  return (
    <div className={styles.container}>
      <input
        onChange={handleInputChange}
        value={inputValue}
        type="text"
        placeholder={t("SEARCH")}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{t("FILTER")}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}>
          {data?.map((category: any, index: any) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ProductTopSection;
