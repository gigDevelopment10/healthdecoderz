import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const InvestmentsPage = () => {
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
                FirstBank
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
              <div
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
              </div>
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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                  <Img
                    src="images/img_upload.svg"
                    className="h-[25px] w-[25px]"
                    alt="upload"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Investments
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
                    Credit Cards
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
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/services")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[56%]">
                  <Img
                    src="images/img_service1.svg"
                    className="h-[25px] w-[25px]"
                    alt="serviceOne"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Services
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
              Investments
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[433px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
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
              src="images/img_ellipse1.png"
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
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_contrast_70X70.svg"
                      className="h-[31px]"
                      alt="contrast"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[68%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Invested Amount
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $150,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_minimize.svg"
                      className="h-[30px]"
                      alt="minimize"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[69%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Number of Investments
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      1,250
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[65%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_reply.svg"
                      className="h-[30px]"
                      alt="reply"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[58%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Rate of Return
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      +5.80%
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Yearly Total Investment
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[12%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $40,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $30,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $20,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $10,000
                      </Text>
                      <Text
                        className="font-normal h-[16px] md:ml-[0] sm:ml-[0] ml-[35px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mt-[0] mt-[14px] sm:w-[100%] w-[88%]">
                      <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                      <div className="h-[161px] md:h-[167px] sm:h-[167px] mt-[6px] relative w-[100%]">
                        <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-col gap-[47px] items-center justify-start w-[100%]">
                            <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                            <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                            <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                          </div>
                        </div>
                        <Img
                          src="images/img_statistics.svg"
                          className="absolute h-[161px] inset-[0] justify-center m-[auto] w-[92%]"
                          alt="Statistics"
                        />
                      </div>
                      <div className="border border-dashed border-gray_103 h-[1px] mt-[22px] w-[100%]"></div>
                      <div className="flex flex-row items-center justify-between mt-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2016
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2017
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2018
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2019
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2020
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Monthly Revenue
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[13%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $40,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $30,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $20,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $10,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mt-[0] mt-[14px] sm:w-[100%] w-[88%]">
                      <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                      <div className="h-[111px] md:h-[136px] sm:h-[136px] mt-[25px] relative w-[100%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[20%] w-[100%]">
                          <div className="flex flex-col gap-[47px] items-center justify-start w-[100%]">
                            <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                            <div className="border border-dashed border-gray_103 h-[1px] w-[100%]"></div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector6.svg"
                          className="absolute h-[111px] inset-[0] justify-center m-[auto] w-[100%]"
                          alt="VectorSix"
                        />
                      </div>
                      <div className="border border-dashed border-gray_103 h-[1px] mt-[7px] w-[100%]"></div>
                      <div className="border border-dashed border-gray_103 h-[1px] mt-[45px] w-[100%]"></div>
                      <div className="flex flex-row items-center justify-between mt-[7px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2016
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2017
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2018
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2019
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2020
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  My Investment
                </Text>
                <List
                  className="flex-col gap-[15px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img src="images/img_eye.svg" className="" alt="eye" />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[32%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Apple Store
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[56px] sm:w-[100%] w-[22%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $54,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[44px] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-medium text-green_600 text-left w-[auto]"
                        variant="body1"
                      >
                        +16%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_google.svg"
                        className=""
                        alt="google"
                      />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[32%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Samsung Mobile
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[56px] sm:w-[100%] w-[22%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $25,300
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[44px] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-medium text-left text-red_700 w-[auto]"
                        variant="body1"
                      >
                        -4%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_signal.svg"
                        className="h-[25px]"
                        alt="signal"
                      />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[21%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Tesla Motors
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Electric Vehicles
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[127px] sm:w-[100%] w-[22%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $8,200
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[44px] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-medium text-green_600 text-left w-[auto]"
                        variant="body1"
                      >
                        +25%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Trending Stock
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[13px] items-start justify-end p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[5px] mt-[2px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium ml-[36px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Name
                      </Text>
                      <Text
                        className="font-medium ml-[86px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-medium ml-[65px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Return
                      </Text>
                    </div>
                    <Line className="bg-gray_103 h-[1px] w-[100%]" />
                  </div>
                  <List
                    className="flex-col gap-[28px] grid md:ml-[0] sm:ml-[0] ml-[5px] md:w-[100%] sm:w-[100%] w-[91%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        01.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Trivago
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $520
                      </Text>
                      <Text
                        className="font-medium text-green_600 text-left w-[auto]"
                        variant="body1"
                      >
                        +5%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        02.
                      </Text>
                      <Text
                        className="font-normal ml-[58px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Canon
                      </Text>
                      <Text
                        className="font-normal ml-[82px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $480
                      </Text>
                      <Text
                        className="font-medium ml-[63px] text-green_600 text-left w-[auto]"
                        variant="body1"
                      >
                        +10%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[97%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        03.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Uber Food
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $350
                      </Text>
                      <Text
                        className="font-medium text-left text-red_700 w-[auto]"
                        variant="body1"
                      >
                        -3%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        04.
                      </Text>
                      <Text
                        className="font-normal ml-[57px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Nokia
                      </Text>
                      <Text
                        className="font-normal ml-[88px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $940
                      </Text>
                      <Text
                        className="font-medium ml-[63px] text-green_600 text-left w-[auto]"
                        variant="body1"
                      >
                        +2%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        05.
                      </Text>
                      <Text
                        className="font-normal ml-[58px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Tiktok
                      </Text>
                      <Text
                        className="font-normal ml-[84px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $670
                      </Text>
                      <Text
                        className="font-medium ml-[64px] text-left text-red_700 w-[auto]"
                        variant="body1"
                      >
                        -12%
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentsPage;
