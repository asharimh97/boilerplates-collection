import { AutoComplete } from "antd";
import { Input } from "components/Form";
import locationApi from "lib/api/location";
import { useEffect, useState } from "react";

interface SelectLocationProps {
  label: string;
  onSelect: (location: any) => void;
  type: "province" | "city" | "district" | "subdistrict";
  required?: boolean;
  defaultValue?: any;
}

function SelectLocation({
  label,
  onSelect,
  type = "city",
  required = false,
  defaultValue,
}: SelectLocationProps) {
  const [value, setValue] = useState("");
  const [timeInterval, setTimeInterval] = useState<any>(0);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const getLocation = async (val: string) => {
    const res = await locationApi.getLocation(val, type);

    if (res.status !== 200) {
      return;
    }

    const { error, data } = res.data;

    if (error) {
      return;
    }

    setList(
      data.data.map((item: any) => ({
        value: item.id,
        label: item.name,
      })),
    );
  };

  const handleSearch = (query: string) => {
    if (query.length > 2) {
      if (timeInterval) {
        clearTimeout(timeInterval);
      }

      setTimeInterval(
        setTimeout(() => {
          getLocation(query);
        }, 500),
      );
    }
  };

  const handleSelect = (val: any, opt: any) => {
    setValue(opt.label);
    onSelect(val);
  };

  return (
    <AutoComplete
      options={list}
      value={value}
      onChange={setValue}
      onSearch={handleSearch}
      onSelect={handleSelect}
    >
      <Input label={label} required={required} />
    </AutoComplete>
  );
}

export default SelectLocation;
