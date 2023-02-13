import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const LoanPage = () => {
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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[55%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-start justify-start w-[71%]">
                  <Img
                    src="images/img_question_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="question"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
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
              Loan
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[533px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
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
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_user_70X70.svg"
                      className="h-[30px]"
                      alt="user One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[59%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Personal Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start my-[4px] w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag.svg"
                      className="h-[30px]"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[61%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Corporate Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $100,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_graph1.svg"
                      className="h-[30px]"
                      alt="graphOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[60%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Business Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $500,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-start my-[4px] w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[30px]"
                      alt="airplane"
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[63%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Custom Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Choose Money
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Active Loans Overview
              </Text>
              <div className="bg-white_A700 flex flex-col gap-[12px] items-start justify-end p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <List
                  className="flex-col gap-[15px] grid items-center md:ml-[0] sm:ml-[0] ml-[9px] md:w-[100%] sm:w-[100%] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[54px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Loan Money
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[74px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Left to repay
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[76px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Duration
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[105px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Interest rate
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[53px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Installment
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[87px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Repay
                      </Text>
                    </div>
                    <Line className="bg-gray_103 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        01.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $100,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[96px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        8 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        02.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $500,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $250,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[100px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        36 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[89px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        10%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $8,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        03.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $900,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[92px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $5,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        04.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        25 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[90px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        5%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        05.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        5 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        16%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $10,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[49px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        06.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $80,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $25,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[110px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        14 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[91px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        8%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        07.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $12,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[106px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $5,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[120px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        9 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        13%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $500 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[71px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        08.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $160,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[96px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $100,800
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[102px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        3 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $900 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[70px] text-[15px] text-center text-indigo_500 w-[auto]"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_103 h-[1px] w-[100%]" />
                  </div>
                </List>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[9px] mr-[auto] md:w-[100%] sm:w-[100%] w-[84%]">
                  <Text
                    className="font-medium text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[62px] text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $125,0000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[85px] text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $750,000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[417px] text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $50,000 / month
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanPage;
