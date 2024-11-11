"use strict";
import { swiper } from "/scripts/swiper.js";
import { handleClick } from "/scripts/router.js";
import { years, slowScroll } from "/scripts/utils.js";
import { sendMail } from "./scripts/sendMail.js";

swiper();
handleClick();
years();
slowScroll();
sendMail();
