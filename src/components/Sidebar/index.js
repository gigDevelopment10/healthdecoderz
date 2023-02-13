import React from "react";

import { Img, Text, Line } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-white_A700 border border-gray_300 border-solid flex flex-col md:gap-[40px] sm:gap-[40px] gap-[67px] items-center justify-start sm:pr-[20px] pr-[30px] py-[30px] w-[100%]">
          <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[74%]">
            <Img
              src="images/img_logo.png"
              className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
              alt="LOGO"
            />
            <Text
              className="font-bold font-inter ml-[4px] text-indigo_600 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              FirstBank
            </Text>
          </div>
          <div className="flex flex-col gap-[23px] justify-start mb-[294px] md:w-[100%] sm:w-[100%] w-[92%]">
            <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[40px] md:w-[100%] sm:w-[100%] w-[81%]">
              <div className="flex flex-row gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                <Img
                  src="images/img_home_25X25.svg"
                  className="h-[25px] w-[25px]"
                  alt="home"
                />
                <Text
                  className="font-inter font-medium mt-[4px] text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-start justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[98%]">
                <Img
                  src="defaultNoData.png"
                  className="h-[25px] w-[25px]"
                  alt="transferOne"
                />
                <Text
                  className="font-inter font-medium mt-[4px] text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Transactions
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[79%]">
                <Img
                  src="images/img_user.svg"
                  className="h-[25px] w-[25px]"
                  alt="user"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Accounts
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-start justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[94%]">
                <Img
                  src="images/img_map.svg"
                  className="h-[25px] w-[25px]"
                  alt="map"
                />
                <Text
                  className="font-inter font-medium mt-[4px] text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Investments
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-start mt-[41px] md:w-[100%] sm:w-[100%] w-[96%]">
                <Img
                  src="images/img_file.svg"
                  className="h-[25px] w-[25px]"
                  alt="file"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Credit Cards
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-start mt-[39px] md:w-[100%] sm:w-[100%] w-[61%]">
                <Img
                  src="images/img_question.svg"
                  className="h-[25px] w-[25px]"
                  alt="question"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Loans
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-start justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[75%]">
                <Img
                  src="images/img_service1.svg"
                  className="h-[25px] w-[25px]"
                  alt="serviceOne"
                />
                <Text
                  className="font-inter font-medium mt-[4px] text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Services
                </Text>
              </div>
              <div className="flex flex-row gap-[20px] items-end justify-start mt-[40px] w-[100%]">
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[25px] w-[25px]"
                  alt="lightbulb"
                />
                <Text
                  className="font-inter font-medium mt-[6px] text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  My Privileges
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[74%]">
              <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
              <Img
                src="images/img_settings_25X25.svg"
                className="h-[25px] ml-[34px] w-[25px]"
                alt="settings"
              />
              <Text
                className="font-inter font-medium ml-[20px] text-indigo_600 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Setting
              </Text>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
