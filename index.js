"use strict";
import { swiper } from "/scripts/swiper.js";
import { handleClick } from "/scripts/router.js";
import { years, slowScroll } from "/scripts/utils.js";
import { sendMail } from "./scripts/sendMail.js";
import { updateModalContant, modalCardHandler } from "./scripts/moda.js";

swiper();
handleClick();
years();
slowScroll();
sendMail();
modalCardHandler();
