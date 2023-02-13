import React from "react";

import { Img, Text, Line, Input, Button, Slider, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[79%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                  <Img
                    src="images/img_file_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transactionsx
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
                    alt="file One"
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
              Transactions
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[424px] my-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[23%]"
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
                    <Button className="bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[17px] text-bluegray_900 text-center w-[auto]">
                      + Add Card
                    </Button>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                    <div className="bg-indigo_600 flex md:flex-1 sm:flex-1 flex-col gap-[33px] items-center justify-end pt-[24px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="not-italic text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
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
                      <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="not-italic text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
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
                  My Expense
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <div className="flex flex-row items-start justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[9px] items-center justify-start mt-[69px] rounded-radius10 w-[13%]">
                      <div className="bg-gray_102 h-[93px] rounded-radius10 w-[100%]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Aug
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[20px] rounded-radius10 w-[13%]">
                      <div className="bg-gray_102 h-[142px] rounded-radius10 w-[100%]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Sep
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[66px] rounded-radius10 w-[13%]">
                      <div className="bg-gray_102 h-[96px] rounded-radius10 w-[100%]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Oct
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[113px] rounded-radius10 w-[13%]">
                      <div className="bg-gray_102 h-[49px] rounded-radius10 w-[100%]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Nov
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[6px] rounded-radius10 w-[19%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body3"
                      >
                        $12,500
                      </Text>
                      <div className="bg-indigo_600 h-[137px] mt-[8px] rounded-radius10 w-[68%]"></div>
                      <Text
                        className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Dec
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[6px] mt-[74px] rounded-radius10 w-[13%]">
                      <div className="bg-gray_102 h-[88px] rounded-radius10 w-[100%]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body4"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-end justify-start w-[100%]">
              <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Recent Transactions
                </Text>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start sm:w-[100%] w-[35%]">
                      <Text
                        className="font-medium text-blue_A700 text-left w-[auto]"
                        variant="body1"
                      >
                        All Transactions
                      </Text>
                      <Line className="bg-blue_A700 h-[3px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                    </div>
                    <Text
                      className="font-medium sm:ml-[0] ml-[71px] text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Income
                    </Text>
                    <Text
                      className="font-medium sm:ml-[0] ml-[82px] text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Expense
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00]"
                ref={sliderRef}
                className="w-[100%]"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white_A700 flex flex-col gap-[15px] items-center justify-end mx-[10px] p-[17px] rounded-radius25">
                      <div className="flex flex-col gap-[11px] items-center justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                          <Text
                            className="font-medium text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Description
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[143px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Transaction ID
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[43px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Type
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[87px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Card
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[97px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Date
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[162px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Amount
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            Receipt
                          </Text>
                        </div>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      </div>
                      <List
                        className="flex-col gap-[15px] grid items-center md:w-[100%] sm:w-[100%] w-[98%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow.svg"
                                className=""
                                alt="Arrow"
                              />
                            </Button>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Spotify Subscription
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[32px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Shopping
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[53px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              28 Jan, 12.30 AM
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                              variant="body1"
                            >
                              -$2,500
                            </Text>
                            <Button
                              className="cursor-pointer font-normal leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[47px] not-italic text-[15px] text-center text-indigo_600 w-[auto]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray_105 h-[1px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                              size="smIcn"
                              variant="icbOutlineGreen600"
                            >
                              <Img
                                src="images/img_arrow_green_600.svg"
                                className=""
                                alt="Arrow One"
                              />
                            </Button>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Freepik Sales
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[83px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              25 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-green_600 text-left w-[auto]"
                              variant="body1"
                            >
                              +$750
                            </Text>
                            <Button
                              className="cursor-pointer font-normal leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-[15px] text-center text-indigo_600 w-[auto]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray_105 h-[1px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow.svg"
                                className=""
                                alt="Arrow Two"
                              />
                            </Button>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Mobile Service
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[73px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Service
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[68px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              20 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                              variant="body1"
                            >
                              -$150
                            </Text>
                            <Button
                              className="cursor-pointer font-normal leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[64px] not-italic text-[15px] text-center text-indigo_600 w-[auto]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray_105 h-[1px] w-[100%]" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                              size="smIcn"
                              variant="icbOutlineRed700"
                            >
                              <Img
                                src="images/img_arrow.svg"
                                className=""
                                alt="Arrow Three"
                              />
                            </Button>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Wilson
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[135px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body1"
                            >
                              15 Jan, 03.29 PM
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                              variant="body1"
                            >
                              -$1050
                            </Text>
                            <Button
                              className="cursor-pointer font-normal leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[54px] not-italic text-[15px] text-center text-indigo_600 w-[auto]"
                              shape="RoundedBorder17"
                              size="sm"
                              variant="OutlineIndigo600"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray_105 h-[1px] w-[100%]" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                size="smIcn"
                                variant="icbOutlineGreen600"
                              >
                                <Img
                                  src="images/img_arrow_green_600.svg"
                                  className=""
                                  alt="Arrow Four"
                                />
                              </Button>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Emilly
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[141px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                #12548796
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Transfer
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                1234 ****
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                variant="body1"
                              >
                                14 Jan, 10.40 PM
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[69px] text-green_600 text-left w-[auto]"
                                variant="body1"
                              >
                                +$840
                              </Text>
                              <Button
                                className="cursor-pointer font-normal leading-[normal] min-w-[100px] md:ml-[0] sm:ml-[0] ml-[58px] not-italic text-[15px] text-center text-indigo_600 w-[auto]"
                                shape="RoundedBorder17"
                                size="sm"
                                variant="OutlineIndigo600"
                              >
                                Download
                              </Button>
                            </div>
                            <Line className="bg-gray_105 h-[1px] w-[100%]" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                <div className="flex flex-row items-center justify-evenly w-[28%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="cursor-pointer h-[24px] w-[24px]"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                    alt="arrowleft"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    variant="body2"
                  >
                    Previous
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium h-[40px] leading-[normal] ml-[12px] text-[15px] text-center text-white_A700 w-[40px]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillIndigo600"
                >
                  1
                </Button>
                <Text
                  className="font-medium ml-[11px] text-indigo_600 text-left w-[auto]"
                  variant="body2"
                >
                  2
                </Text>
                <Text
                  className="font-medium ml-[27px] text-indigo_600 text-left w-[auto]"
                  variant="body2"
                >
                  3
                </Text>
                <Text
                  className="font-medium ml-[27px] text-indigo_600 text-left w-[auto]"
                  variant="body2"
                >
                  4
                </Text>
                <div className="flex flex-row items-center justify-evenly ml-[28px] w-[19%]">
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
                    variant="body2"
                  >
                    Next
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="cursor-pointer h-[24px] w-[24px]"
                    onClick={() => sliderRef.current?.slideNext?.()}
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
