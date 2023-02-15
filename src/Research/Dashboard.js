import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[250px]">
          <div className="bg-white_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-[100%]">
            <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_logo_indigo_600.png"
                className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                alt="LOGO"
              />
              <Text
                className="font-bold ml-[4px] text-indigo_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                MediSecure
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-[334px] w-[100%]">
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_home_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="home"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              {/* <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/transaction")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[73%]">
                  <Img
                    src="images/img_glyph.svg"
                    className="h-[25px] w-[25px]"
                    alt="Glyph"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transactions
                  </Text>
                </div>
              </div> */}
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[59%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[25px] w-[25px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Accounts
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/investments")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[70%]">
                  <Img
                    src="images/img_map.svg"
                    className="h-[25px] w-[25px]"
                    alt="map"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Funds
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/creditcards")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[72%]">
                  <Img
                    src="images/img_file.svg"
                    className="h-[25px] w-[25px]"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Doctors
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/loan")}
              >
                <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[45%]">
                  <Img
                    src="images/img_question.svg"
                    className="h-[25px] w-[25px]"
                    alt="question"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Loans
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[64%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[75%]">
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] w-[25px]"
                    alt="call"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Available Database
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start p-[17px] w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-center md:w-[100%] sm:w-[100%] w-[75%]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[25px] w-[25px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    My Privileges
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[25px] w-[25px]"
                    alt="settings"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Available Database
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[482px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
              name="GroupEight"
              placeholder="Search for something"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#888ea2"
                    className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcCircleBorder25"
              size="smSrc"
              variant="srcFillGray101"
            ></Input>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
            >
              <Img
                src="images/img_settings_50X50.svg"
                className="h-[25px]"
                alt="settings One"
              />
            </Button>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
            >
              <Img
                src="images/img_notification.svg"
                className="h-[25px]"
                alt="notification"
              />
            </Button>
            <Img
              src="images/pfizer.png"
              className="h-[60px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[35px] rounded-radius50 w-[60px]"
              alt="EllipseOne"
            />
          </div>
          <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_location.svg"
                      className="h-[30px]"
                      alt="location"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[64%]">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Find
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Advanced search
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag_70X70.svg"
                      className="h-[30px]"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[60%]">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Buy. Think. Grow.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[30px]"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[61%]">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Safety
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      We are your allies
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
              Database details 
              </Text>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            We propmote Research and Development
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">OSharing health data can provide valuable insights into human health and disease, and can help to advance medical research and improve patient outcomes</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Available Data
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Updated
                </th>
                <th scope="col" class="px-6 py-3">
                    No of Records
                </th>
                <th scope="col" class="px-6 py-3">
                    Price (Ether)
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Requestt</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Leukemia
                </th>
                <td class="px-6 py-4">
                    2 days ago
                </td>
                <td class="px-6 py-4">
                    2000
                </td>
                <td class="px-6 py-4">
                    0.02 (per record)
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="https://www.dhiwise.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pneumonia
                </th>
                <td class="px-6 py-4">
                    15 days ago
                </td>
                <td class="px-6 py-4">
                    50000
                </td>
                <td class="px-6 py-4">
                   0.07 (15 records)
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="https://www.dhiwise.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Lung cancer
                </th>
                <td class="px-6 py-4">
                    3 weeks ago
                </td>
                <td class="px-6 py-4">
                    4000
                </td>
                <td class="px-6 py-4">
                    0.09 (per record)
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="https://www.dhiwise.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Request</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>




            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
