import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://draft.spline.design/imlYmSZjJ9eKiLCO/scene.splinecode", {
	credentials: 'include',
	mode: 'no-cors',
});
//A - https://draft.spline.design/YtkPhDwE0IeIFZt9/scene.splinecode
//B - https://prod.spline.design/ECtH9ire2mnZ4TOL/scene.splinecode
