import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Tooltip, message } from "antd";

const handleButtonClick = (e: any) => {
  console.log("click left button", e);
};

const handleMenuClick = (e: any) => {
  console.log("click", e);
};

const items = [
  {
    label: "Más popular",
    key: "1",
  },
  {
    label: "Menor precio",
    key: "2",
  },
  {
    label: "Mayor precio",
    key: "3",
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const SortingButton = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Ordenar por: más popular
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default SortingButton;
