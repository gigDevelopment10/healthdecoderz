import React from "react";

import { Img, Line, Text, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MainDashboardPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] pb-[30px] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[250px]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-[100%]">
            <Img
              src="images/img_logo.png"
              className="h-[40px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[65%]"
              alt="Logo"
            />
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[78%]">
                  <Img
                    src="images/img_home.svg"
                    className="h-[25px] w-[25px]"
                    alt="home"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
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
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Overview
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[471px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
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
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      My Cards
                    </Text>
                    <Text
                      className="common-pointer font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                      onClick={() => navigate("/creditcards")}
                    >
                      See All
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                    <div className="bg-indigo_600 flex md:flex-1 sm:flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[29px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-lato not-italic text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chipcard.png"
                            className="h-[34px] md:h-[auto] sm:h-[auto] object-cover w-[34px]"
                            alt="ChipCard"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="flex flex-col items-start justify-start w-[44%]">
                            <Text
                              className="not-italic text-left text-white_A700_b2 w-[auto]"
                              variant="body5"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              Eddy Cusuma
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
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="flex w-[100%]"
                        name="Group319"
                        placeholder="3778 **** **** 1234"
                        suffix={
                          <Img
                            src="images/img_contrast.svg"
                            className="ml-[35px] my-[auto]"
                            alt="contrast"
                          />
                        }
                        shape="CustomBorderBL25"
                        size="lg"
                        variant="GradientWhiteA70026WhiteA70026"
                      ></Input>
                    </div>
                    <div className="bg-indigo_500 flex md:flex-1 sm:flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[29px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-lato not-italic text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chipcard.png"
                            className="h-[34px] md:h-[auto] sm:h-[auto] object-cover w-[34px]"
                            alt="ChipCard One"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="flex flex-col items-start justify-start w-[44%]">
                            <Text
                              className="not-italic text-left text-white_A700_b2 w-[auto]"
                              variant="body5"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              Eddy Cusuma
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
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="font-normal leading-[normal] not-italic p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="flex w-[100%]"
                        name="Group319 One"
                        placeholder="3778 **** **** 1234"
                        suffix={
                          <Img
                            src="images/img_contrast.svg"
                            className="ml-[35px] my-[auto]"
                            alt="contrast"
                          />
                        }
                        shape="CustomBorderBL25"
                        size="lg"
                        variant="GradientWhiteA70026WhiteA70026"
                      ></Input>
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
                  Recent Transaction
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-[10px] grid items-center p-[24px] sm:px-[20px] rounded-radius25 w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-radius50 w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-[28px]"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px] w-[57%]">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Deposit from my Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        28 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[13px] text-left text-red_700 w-[auto]"
                      variant="body1"
                    >
                      -$850
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-radius50 w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_link.svg"
                        className="h-[28px]"
                        alt="link"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start ml-[17px] w-[40%]">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Deposit Paypal
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        25 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[46px] text-green_600 text-left w-[auto]"
                      variant="body1"
                    >
                      +$2,500
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-radius50 w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="h-[28px]"
                        alt="clock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px] w-[39%]">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Jemi Wilson
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        21 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[48px] text-green_600 text-left w-[auto]"
                      variant="body1"
                    >
                      +$5,400
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Weekly Activity
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[22px] items-end justify-start p-[28px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-row gap-[30px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[38%]">
                      <div className="bg-indigo_200 h-[15px] rounded-radius50 w-[15px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Diposit
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[47%]">
                      <div className="bg-indigo_600 h-[15px] rounded-radius50 w-[15px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body2"
                      >
                        Withdraw
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col gap-[21px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            500
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            400
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            300
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            200
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            100
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            0
                          </Text>
                        </div>
                        <Img
                          src="images/img_group899.svg"
                          className="h-[186px] w-[auto]"
                          alt="Group899"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[84%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Sat
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[67px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Sun
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[65px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[65px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[64px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[64px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Thu
                        </Text>
                        <Text
                          className="font-normal h-[16px] sm:ml-[0] ml-[70px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          Fri
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Expense Statistics
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[31px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="md:h-[186px] sm:h-[186px] h-[259px] relative w-[94%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[7%] p-[33px] sm:px-[20px] top-[0] w-[70%]"
                      style={{
                        backgroundImage: "url('images/img_group900.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] mb-[22px] text-center text-white_A700"
                        variant="body4"
                      >
                        <span className="text-white_A700 text-[16px] font-inter font-bold">
                          30%
                          <br />
                        </span>
                        <span className="text-white_A700 text-[13px] font-inter font-bold">
                          Entertainment
                        </span>
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col items-center justify-start left-[0] p-[14px] w-[42%]"
                      style={{
                        backgroundImage: "url('images/img_group903.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] my-[59px] text-center text-white_A700"
                        variant="body4"
                      >
                        <span className="text-white_A700 text-[16px] font-inter font-bold">
                          20%
                          <br />
                        </span>
                        <span className="text-white_A700 text-[13px] font-inter font-bold">
                          Investment
                        </span>
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-end p-[6px] right-[0] top-[11%] w-[55%]"
                      style={{
                        backgroundImage: "url('images/img_group901.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] mr-[19px] mt-[48px] text-center text-white_A700"
                        variant="body4"
                      >
                        <span className="text-white_A700 text-[16px] font-inter font-bold">
                          15%
                          <br />
                        </span>
                        <span className="text-white_A700 text-[13px] font-inter font-bold">
                          Bill Expense
                        </span>
                      </Text>
                    </div>
                    <div className="absolute bg-indigo_200 bottom-[0] flex flex-col h-[119px] items-center justify-start p-[23px] sm:px-[20px] right-[12%] w-[119px]">
                      <Text
                        className="font-medium leading-[18.00px] mb-[33px] text-center text-white_A700"
                        variant="body4"
                      >
                        <span className="text-white_A700 text-[16px] font-inter font-bold">
                          35%
                          <br />
                        </span>
                        <span className="text-white_A700 text-[13px] font-inter font-bold">
                          Others
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-bluegray_800 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Quick Transfer
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[29px] items-center justify-center p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between mt-[10px] w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid grid-cols-3 w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-[100%]">
                        <Img
                          src="images/img_ellipse18.png"
                          className="h-[70px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[70px]"
                          alt="EllipseEighteen"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-indigo_700 text-left w-[auto]"
                            variant="body1"
                          >
                            Livia Bator
                          </Text>
                          <Text
                            className="font-bold mt-[5px] text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            CEO
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-[100%]">
                        <Img
                          src="images/img_ellipse19.png"
                          className="h-[70px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[70px]"
                          alt="EllipseNineteen"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Randy Press
                          </Text>
                          <Text
                            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            Director
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-[100%]">
                        <Img
                          src="images/img_ellipse17.png"
                          className="h-[70px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[70px]"
                          alt="EllipseSeventeen"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Workman
                          </Text>
                          <Text
                            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            Designer
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Button
                      className="flex h-[50px] items-center justify-center mb-[36px] sm:mt-[0] mt-[41px] rounded-radius50 w-[50px]"
                      size="mdIcn"
                      variant="icbOutlineGray300cc"
                    >
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-[24px]"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between mb-[10px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Write Amount
                    </Text>
                    <div className="bg-gray_102 flex sm:flex-1 flex-row items-center justify-between sm:pl-[20px] pl-[30px] rounded-radius25 sm:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-indigo_700 text-left w-[auto]"
                        variant="body1"
                      >
                        525.50
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[125px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineGray300cc"
                      >
                        Send
                      </Button>
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
                  Balance History
                </Text>
                <div className="bg-white_A700 md:h-[205px] h-[276px] sm:h-[349px] p-[20px] relative rounded-radius25 w-[100%]">
                  <Img
                    src="images/img_group.svg"
                    className="h-[185px] ml-[auto] mr-[5px] mt-[15px] w-[87%]"
                    alt="Group"
                  />
                  <div className="absolute md:h-[205px] h-[216px] sm:h-[349px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[93%]">
                    <div className="absolute flex flex-col items-start justify-start left-[0] pl-[3px] top-[0] w-[8%]">
                      <div className="flex flex-row gap-[8px] items-end justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          800
                        </Text>
                        <div className="bg-bluegray_400 h-[1px] my-[4px] w-[auto]"></div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-between ml-[auto] mt-[35px] md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          600
                        </Text>
                        <div className="bg-bluegray_400 h-[1px] my-[4px] w-[auto]"></div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-between ml-[auto] mt-[36px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          400
                        </Text>
                        <div className="bg-bluegray_400 h-[1px] my-[4px] w-[auto]"></div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-between ml-[auto] mt-[35px] md:w-[100%] sm:w-[100%] w-[93%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body4"
                        >
                          200
                        </Text>
                        <div className="bg-bluegray_400 h-[1px] my-[5px] w-[auto]"></div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-end ml-[auto] mt-[34px] md:w-[100%] sm:w-[100%] w-[56%]">
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body5"
                        >
                          0
                        </Text>
                        <div className="bg-bluegray_400 h-[1px] my-[4px] w-[28%]"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-[93%]">
                      <Img
                        src="images/img_vector.png"
                        className="h-[177px] sm:h-[auto] object-cover w-[100%]"
                        alt="Vector Five"
                      />
                      <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[91%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] w-[1%]"
                              alt="Group One"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Two"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Three"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Four"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[79px] w-[1%]"
                              alt="Group Five"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Six"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-[4px] sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Seven"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[3px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Jul
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Aug
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Sep
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Oct
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Nov{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Dec
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body3"
                            >
                              Jan
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboardPage;
