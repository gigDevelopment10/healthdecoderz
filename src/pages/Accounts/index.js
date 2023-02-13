import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const AccountsPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-start justify-start w-[77%]">
                  <Img
                    src="images/img_user_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Report Synopses
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
              Report Synopsis
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[470px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
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
          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-center md:w-[100%] sm:w-[100%] w-[90%]">
                    <Button
                      className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                      size="xlIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_info.svg"
                        className="h-[30px]"
                        alt="info"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[55%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        74/90
                      </Text>
                      <Text
                        className="font-semibold text-indigo_600 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                         BP 
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-center md:w-[100%] sm:w-[100%] w-[85%]">
                    <Button
                      className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                      size="xlIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_group400.svg"
                        className=""
                        alt="Group400"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[52%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        5.65 t.cells/L 
                      </Text>
                      <Text
                        className="font-semibold text-indigo_600 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        RBC 
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-row gap-[15px] items-center justify-center p-[25px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="flex h-[70px] items-center justify-center ml-[16px] rounded-radius50 w-[70px]"
                  size="xlIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_clock_70X70.svg"
                    className="h-[30px]"
                    alt="clock"
                  />
                </Button>
                <div className="flex flex-col gap-[7px] items-start justify-start mr-[15px] w-[45%]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Expense
                  </Text>
                  <Text
                    className="font-semibold text-indigo_600 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $3,460
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[25px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[15px] items-center justify-center md:w-[100%] sm:w-[100%] w-[87%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_ticket.svg"
                      className="h-[30px]"
                      alt="ticket"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[54%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Saving
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $7,920
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between mt-[23px] w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  My Reports
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-[10px] grid items-center p-[25px] sm:px-[20px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_alarm.svg"
                        className="h-[27px]"
                        alt="alarm"
                      />
                    </Button>
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[24%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Blood Test
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        25 Dec 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[31px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Apolo24/7
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[43px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      1234
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Pending
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[70px] text-left text-red_700 w-[auto]"
                      variant="body1"
                    >
                      Leukemia
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_group327.svg"
                        className="h-[25px]"
                        alt="Group327"
                      />
                    </Button>
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[18%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Blood Test
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        25 Dec 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[73px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Apolo24/7
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[58px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      7651
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Complete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[44px] text-green_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Leukemia
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="h-[25px]"
                        alt="Group326"
                      />
                    </Button>
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[16%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Blood Test
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        23 Dec 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[86px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Apolo24/7
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[52px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      4563
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Complete
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[44px] text-green_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Leukemia
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Clinic Card
                    </Text>
                    <Text
                      className="common-pointer font-semibold mt-[5px] text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                      onClick={() => navigate("/investments")}
                    >
                      See All
                    </Text>
                  </div>
                  <div className="bg-indigo_600 flex flex-col gap-[37px] items-center justify-end pt-[24px] rounded-radius25 w-[100%]">
                    <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-left text-white_A700 w-[auto]"
                            variant="body5"
                          >
                            Smt. Sumitra Chandra
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            23759030474
                          </Text>
                        </div>
                        {/* <Img
                          src="images/img_chipcard.png"
                          className="h-[34px] md:h-[auto] sm:h-[auto] object-cover w-[34px]"
                          alt="ChipCard"
                        /> */}
                      </div>
                      <div className="flex flex-row gap-[59px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-col items-start justify-start w-[44%]">
                          <Text
                            className="not-italic text-left text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            Membership
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Silver
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[33%]">
                          <Text
                            className="not-italic text-left text-white_A700_b2 w-[auto]"
                            variant="body5"
                          >
                            VALID THRU
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            12/23
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Input
                      className="font-normal leading-[normal] not-italic p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Group1033"
                      placeholder="Apollo 24/7"
                      // suffix={
                      //   <Img
                      //     src="images/img_contrast.svg"
                      //     className="ml-[35px] my-[auto]"
                      //     alt="contrast"
                      //   />
                      // }
                      shape="CustomBorderBL25"
                      size="lg"
                      variant="GradientWhiteA70026WhiteA70026"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between mt-[24px] w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Debit & Credit Overview
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-col gap-[27px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between rounded-radius5 w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        <span className="text-bluegray_801 text-[16px] font-inter">
                          $7,560
                        </span>
                        <span className="text-bluegray_400 text-[16px] font-inter">
                          {" "}
                          Debited &{" "}
                        </span>
                        <span className="text-bluegray_801 text-[16px] font-inter">
                          $5,420
                        </span>
                        <span className="text-bluegray_400 text-[16px] font-inter">
                          {" "}
                          Credited in this Week
                        </span>
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-[25px] items-center justify-between rounded-radius5 sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-center justify-start rounded-radius5 w-[auto]">
                          <div className="bg-indigo_600 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Debit
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-start rounded-radius5 w-[auto]">
                          <div className="bg-indigo_200 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Credit
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start rounded-radius10 w-[100%]">
                      <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                          <div className="bg-indigo_600 h-[135px] sm:mt-[0] mt-[99px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[234px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[106px] sm:mt-[0] mt-[128px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[186px] sm:mt-[0] mt-[48px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[102px] sm:mt-[0] mt-[132px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[139px] sm:mt-[0] mt-[95px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[212px] sm:mt-[0] mt-[22px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[123px] sm:mt-[0] mt-[111px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[150px] sm:mt-[0] mt-[84px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[214px] sm:mt-[0] mt-[20px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[158px] sm:mt-[0] mt-[76px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[105px] sm:mt-[0] mt-[129px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_600 h-[179px] sm:mt-[0] mt-[55px] rounded-radius10 w-[auto]"></div>
                          <div className="bg-indigo_200 h-[216px] sm:mt-[0] mt-[18px] rounded-radius10 w-[auto]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[93%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Sat
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Sun
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Mon
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Tue
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Wed
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Thu
                          </Text>
                          <Text
                            className="font-normal h-[17px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body3"
                          >
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Invoices Sent
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-[21px] grid items-center p-[25px] sm:px-[20px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="h-[25px]"
                        alt="refresh"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[31%]">
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
                        5h ago
                      </Text>
                    </div>
                    <Text
                      className="font-bold ml-[87px] text-indigo_600 text-left w-[auto]"
                      variant="body1"
                    >
                      $450
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="h-[25px]"
                        alt="Group934"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[27%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Michael
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        2 days ago
                      </Text>
                    </div>
                    <Text
                      className="font-bold ml-[102px] text-indigo_600 text-left w-[auto]"
                      variant="body1"
                    >
                      $160
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_volume.svg"
                        className="h-[25px]"
                        alt="volume"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[30%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Playstation
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        5 days ago
                      </Text>
                    </div>
                    <Text
                      className="font-bold ml-[84px] text-indigo_600 text-left w-[auto]"
                      variant="body1"
                    >
                      $1085
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_group326.svg"
                        className="h-[25px]"
                        alt="Group936"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[30%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        William
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        10 days ago
                      </Text>
                    </div>
                    <Text
                      className="font-bold ml-[102px] text-indigo_600 text-left w-[auto]"
                      variant="body1"
                    >
                      $90
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
