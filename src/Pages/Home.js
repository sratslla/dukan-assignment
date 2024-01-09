import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import chart from "../Assets/chart.jpeg";
import shortcutimage from "../Assets/shortcutimage.png";

const Home = () => {
	return (
		<div className="home-main">
			<Navbar />
			<div className="home-right">
				<Header />
				<div className="home-bottom-main">
					<div className="home-error">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13.7316 3.875C12.9618 2.54167 11.0373 2.54167 10.2676 3.875L2.04046 18.125C1.27067 19.4583 2.23291 21.125 3.77248 21.125H20.2267C21.7662 21.125 22.7285 19.4583 21.9587 18.125L13.7316 3.875ZM11.9996 8.87499C12.4138 8.87499 12.7496 9.16281 12.7496 9.51785V14.2321C12.7496 14.5872 12.4138 14.875 11.9996 14.875C11.5854 14.875 11.2496 14.5872 11.2496 14.2321V9.51785C11.2496 9.16281 11.5854 8.87499 11.9996 8.87499ZM12.7496 16.4375C12.7496 16.1268 12.4138 15.875 11.9996 15.875C11.5854 15.875 11.2496 16.1268 11.2496 16.4375V16.8125C11.2496 17.1231 11.5854 17.375 11.9996 17.375C12.4138 17.375 12.7496 17.1231 12.7496 16.8125V16.4375Z"
								fill="#E50B20"
							/>
						</svg>
						<div className="home-error-text">
							<p className="home-error-text-title">
								Dukaan Pay will be deactivated soon!
							</p>
							<p className="home-error-text-para">
								To continue receiving online payments from your
								customers, please set up a new payment provider.
								Dukaan Pay will no longer be operational from 1
								September, 2023.
							</p>
						</div>
						<button className="home-error-button">
							Set up new payment provider
						</button>
					</div>
					<aside className="home-overview">
						<h1>Overview</h1>
						<select>
							<option>Lifetime</option>
						</select>
					</aside>
					<div className="home-containers">
						<div className="share-store-link">
							<div className="share-store-link-top">
								<h1 className="share-store-link-top-title">
									Share store link
								</h1>
								<h1 className="share-store-link-top-para">
									Customers can visit the following link and
									place their orders.
								</h1>
								<div className="share-store-link-top-link">
									<h1>manosuperstore.com</h1>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.2002 4.0002C14.2002 3.55837 14.5584 3.2002 15.0002 3.2002H20.0002C20.442 3.2002 20.8002 3.55837 20.8002 4.0002V9.0002C20.8002 9.44202 20.442 9.8002 20.0002 9.8002C19.5584 9.8002 19.2002 9.44202 19.2002 9.0002V4.8002H15.0002C14.5584 4.8002 14.2002 4.44202 14.2002 4.0002Z"
											fill="#EE741F"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M20.5659 3.43451C20.8783 3.74693 20.8783 4.25346 20.5659 4.56588L13.5659 11.5659C13.2535 11.8783 12.7469 11.8783 12.4345 11.5659C12.1221 11.2535 12.1221 10.7469 12.4345 10.4345L19.4345 3.43451C19.7469 3.12209 20.2535 3.12209 20.5659 3.43451Z"
											fill="#EE741F"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M4.8002 7.8002H10.5002C10.942 7.8002 11.3002 7.44202 11.3002 7.0002C11.3002 6.55837 10.942 6.2002 10.5002 6.2002H4.72242C4.3187 6.2002 3.93152 6.36057 3.64604 6.64604C3.36057 6.93152 3.2002 7.3187 3.2002 7.72242V19.278C3.2002 19.6817 3.36057 20.0689 3.64604 20.3543C3.93152 20.6398 4.3187 20.8002 4.72242 20.8002H16.278C16.6817 20.8002 17.0689 20.6398 17.3543 20.3543C17.6398 20.0689 17.8002 19.6817 17.8002 19.278V13.5002C17.8002 13.0584 17.442 12.7002 17.0002 12.7002C16.5584 12.7002 16.2002 13.0584 16.2002 13.5002V19.2002H4.8002V7.8002Z"
											fill="#EE741F"
										/>
									</svg>
								</div>
								<div className="share-store-link-top-icons">
									<h1>Share via</h1>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="36"
										height="36"
										viewBox="0 0 36 36"
										fill="none"
									>
										<rect
											width="36"
											height="36"
											rx="4"
											fill="#49C759"
										/>
										<path
											d="M18.0143 6.75C11.8194 6.75 6.77642 11.7575 6.77417 17.9141C6.77305 19.882 7.29171 21.8032 8.27505 23.4961L6.75 29.1131L12.637 27.7307C14.2786 28.6207 16.1265 29.0879 18.0077 29.0891H18.0121C24.2058 29.0891 29.2466 24.0804 29.25 17.925C29.2522 14.9406 28.0845 12.1347 25.9626 10.0237C23.8406 7.9137 21.0206 6.75112 18.0143 6.75ZM18.0121 8.98631C20.4153 8.98743 22.6738 9.91862 24.3716 11.6048C26.0694 13.2932 27.002 15.5367 26.9998 17.9228C26.9975 22.8472 22.9671 26.8528 18.0099 26.8528C16.5101 26.8516 15.0245 26.4774 13.716 25.7674L12.9579 25.3568L12.1206 25.5533L9.90558 26.0731L10.4462 24.077L10.6901 23.1816L10.2242 22.378C9.43889 21.0272 9.02327 19.4828 9.02439 17.9141C9.02664 12.992 13.0582 8.98631 18.0121 8.98631ZM14.0368 12.7601C13.8489 12.7601 13.5452 12.83 13.2875 13.1095C13.0299 13.3879 12.303 14.0623 12.303 15.4354C12.303 16.8084 13.3095 18.1357 13.4501 18.3225C13.5896 18.5081 15.3928 21.4149 18.2472 22.533C20.6189 23.4622 21.1007 23.2788 21.616 23.2319C22.1313 23.186 23.2784 22.5581 23.5124 21.9062C23.7464 21.2543 23.7469 20.6936 23.6772 20.5784C23.6074 20.4621 23.4201 20.3928 23.1388 20.253C22.8587 20.1133 21.4781 19.4395 21.2204 19.3467C20.9628 19.2539 20.7743 19.2069 20.5875 19.4865C20.4008 19.766 19.864 20.3928 19.6997 20.5784C19.5355 20.7652 19.3723 20.7903 19.091 20.6505C18.8098 20.5096 17.9054 20.2142 16.832 19.2637C15.9972 18.5246 15.4339 17.6127 15.2696 17.3332C15.1065 17.0547 15.2542 16.9018 15.3949 16.7632C15.5209 16.6379 15.674 16.4372 15.8146 16.274C15.9541 16.1107 16.0025 15.9944 16.0959 15.8088C16.1893 15.6232 16.1415 15.4594 16.0717 15.3196C16.002 15.1798 15.4557 13.8016 15.2059 13.2493C14.9955 12.7852 14.7733 12.7745 14.573 12.7666C14.4099 12.7599 14.2236 12.7601 14.0368 12.7601Z"
											fill="white"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="36"
										height="36"
										viewBox="0 0 36 36"
										fill="none"
									>
										<rect
											width="36"
											height="36"
											rx="4"
											fill="#1A77F2"
										/>
										<path
											d="M21.1094 11.9443H24.1312V7.875H20.5789V7.88967C16.2747 8.02864 15.3925 10.2342 15.3148 12.5508H15.3059V14.5828H12.375V18.5679H15.3059V29.25H19.723V18.5679H23.3413L24.0403 14.5828H19.7245V13.3551C19.7245 12.5722 20.2959 11.9443 21.1094 11.9443Z"
											fill="white"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="36"
										height="36"
										viewBox="0 0 36 36"
										fill="none"
									>
										<rect
											width="36"
											height="36"
											rx="4"
											fill="#1EA1F1"
										/>
										<path
											d="M26.9473 13.7444C26.9563 13.9521 26.9608 14.1582 26.9608 14.3644C26.9608 20.7173 22.318 28.0385 13.826 28.0385C11.2173 28.0385 8.79164 27.2436 6.75 25.8787C7.11152 25.9239 7.47905 25.9442 7.85257 25.9442C10.0172 25.9442 12.0064 25.1775 13.5845 23.886C11.5638 23.8469 9.85821 22.457 9.27167 20.5486C9.55369 20.6049 9.84321 20.6345 10.1402 20.6345C10.5618 20.6345 10.9713 20.5752 11.3568 20.4659C9.24467 20.0255 7.65306 18.0827 7.65306 15.7543C7.65306 15.734 7.65306 15.7137 7.65306 15.6934C8.2756 16.0541 8.98665 16.2696 9.7442 16.2946C8.50662 15.4341 7.69056 13.9615 7.69056 12.2951C7.69056 11.4128 7.91708 10.5867 8.3146 9.87923C10.5918 12.7871 13.994 14.7017 17.8297 14.9016C17.7517 14.5502 17.7112 14.1832 17.7112 13.8069C17.7112 11.1536 19.7784 9 22.327 9C23.6546 9 24.8547 9.58407 25.6963 10.518C26.7478 10.3009 27.7364 9.90265 28.629 9.35138C28.2839 10.4742 27.5519 11.4144 26.5978 12.0109C27.5309 11.8954 28.4204 11.6377 29.25 11.2551C28.6335 12.2202 27.8519 13.0651 26.9473 13.7444Z"
											fill="white"
										/>
									</svg>
								</div>
							</div>
							<div className="share-store-link-bottom">
								<h1>Get your custom domain</h1>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<rect
										width="20"
										height="20"
										rx="10"
										fill="#1E2640"
									/>
									<path
										d="M8.61359 13.9738C8.38002 13.7402 8.35879 13.3747 8.54989 13.1172L8.61359 13.0434L11.6569 9.99984L8.61359 6.95627C8.38002 6.7227 8.35879 6.3572 8.54989 6.09965L8.61359 6.02586C8.84716 5.7923 9.21265 5.77106 9.47021 5.96216L9.54399 6.02586L13.0528 9.53464C13.2863 9.7682 13.3076 10.1337 13.1165 10.3913L13.0528 10.465L9.54399 13.9738C9.28707 14.2307 8.87052 14.2307 8.61359 13.9738Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<div className="total-sales">
							<div>
								<div className="ts-title">
									TOTAL SALES
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.99994 0.766602C11.9948 0.766602 15.2333 4.00508 15.2333 7.99994C15.2333 11.9948 11.9948 15.2333 7.99994 15.2333C4.00508 15.2333 0.766602 11.9948 0.766602 7.99994C0.766602 4.00508 4.00508 0.766602 7.99994 0.766602ZM7.99994 1.89993C4.631 1.89993 1.89993 4.631 1.89993 7.99994C1.89993 11.3689 4.631 14.0999 7.99994 14.0999C11.3689 14.0999 14.0999 11.3689 14.0999 7.99994C14.0999 4.631 11.3689 1.89993 7.99994 1.89993ZM7.99994 7.43327C8.28882 7.43327 8.52722 7.64944 8.56219 7.92885L8.5666 7.99994V10.6666C8.5666 10.9796 8.3129 11.2333 7.99994 11.2333C7.71105 11.2333 7.47265 11.0171 7.43768 10.7377L7.43327 10.6666V7.99994C7.43327 7.68697 7.68697 7.43327 7.99994 7.43327ZM8.0066 4.7666C8.31956 4.7666 8.57327 5.02031 8.57327 5.33327C8.57327 5.62216 8.35709 5.86055 8.07768 5.89552L7.99994 5.89993C7.68697 5.89993 7.43327 5.64623 7.43327 5.33327C7.43327 5.04438 7.64944 4.80598 7.92885 4.77102L8.0066 4.7666Z"
											fill="#808080"
										/>
									</svg>
								</div>
								<h1 className="ts-link">View breakdown</h1>
							</div>
							<div>
								<h1 className="ts-percentage">58.61%</h1>
								<h1 className="ts-numbers">4 orders</h1>
							</div>
							<div>
								<img
									src={chart}
									alt="chart"
									className="overview-chart"
								></img>
							</div>
						</div>
						<div className="store-conversion">
							<div>
								<div className="ts-title">
									STORE CONVERSION RATE
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.99994 0.766602C11.9948 0.766602 15.2333 4.00508 15.2333 7.99994C15.2333 11.9948 11.9948 15.2333 7.99994 15.2333C4.00508 15.2333 0.766602 11.9948 0.766602 7.99994C0.766602 4.00508 4.00508 0.766602 7.99994 0.766602ZM7.99994 1.89993C4.631 1.89993 1.89993 4.631 1.89993 7.99994C1.89993 11.3689 4.631 14.0999 7.99994 14.0999C11.3689 14.0999 14.0999 11.3689 14.0999 7.99994C14.0999 4.631 11.3689 1.89993 7.99994 1.89993ZM7.99994 7.43327C8.28882 7.43327 8.52722 7.64944 8.56219 7.92885L8.5666 7.99994V10.6666C8.5666 10.9796 8.3129 11.2333 7.99994 11.2333C7.71105 11.2333 7.47265 11.0171 7.43768 10.7377L7.43327 10.6666V7.99994C7.43327 7.68697 7.68697 7.43327 7.99994 7.43327ZM8.0066 4.7666C8.31956 4.7666 8.57327 5.02031 8.57327 5.33327C8.57327 5.62216 8.35709 5.86055 8.07768 5.89552L7.99994 5.89993C7.68697 5.89993 7.43327 5.64623 7.43327 5.33327C7.43327 5.04438 7.64944 4.80598 7.92885 4.77102L8.0066 4.7666Z"
											fill="#808080"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h1 className="ts-percentage">58.61%</h1>
								<h1 className="ts-numbers">121 sessions</h1>
							</div>
							<div>
								<img
									src={chart}
									alt="chart"
									className="overview-chart"
								></img>
							</div>
						</div>
					</div>
					<div className="home-headings">
						<div className="home-heading-1">
							<h1 className="heading-type1">Shortcuts (3/6)</h1>
							<h1 className="heading-type2">Edit</h1>
						</div>
						<div className="home-heading-2">
							<h1 className="heading-type1">Orders</h1>
							<h1 className="heading-type2">View all</h1>
						</div>
					</div>
					<div className="home-bottom-containers">
						<div className="home-bottom-containers-left">
							<div className="shortcut-containers">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M4.04492 12.0002C4.04492 11.5032 4.44787 11.1002 4.94492 11.1002H19.0555C19.5526 11.1002 19.9555 11.5032 19.9555 12.0002C19.9555 12.4973 19.5526 12.9002 19.0555 12.9002H4.94492C4.44787 12.9002 4.04492 12.4973 4.04492 12.0002Z"
										fill="#4D4D4D"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.0002 19.9555C11.5032 19.9555 11.1002 19.5526 11.1002 19.0555V4.94492C11.1002 4.44787 11.5032 4.04492 12.0002 4.04492C12.4973 4.04492 12.9002 4.44787 12.9002 4.94492V19.0555C12.9002 19.5526 12.4973 19.9555 12.0002 19.9555Z"
										fill="#4D4D4D"
									/>
								</svg>
								<h1>Add New Product</h1>
							</div>
							<div className="shortcut-containers">
								<img
									src={shortcutimage}
									alt="not found"
									width={"30px"}
									height={"30px"}
								></img>
								<h1>Product reviews and ...</h1>
							</div>
							<div className="shortcut-containers">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									style={{
										borderRadius: "4px",
										background: "#EE741F",
									}}
								>
									<path
										d="M21.1473 0.738539C21.2893 0.840935 21.3739 1.01049 21.3739 1.19216V18.8086C21.3739 18.9903 21.2893 19.1598 21.1473 19.2622C21.0586 19.3261 20.9562 19.3591 20.8518 19.3591C20.7881 19.3591 20.7255 19.347 20.6639 19.3228L7.17946 13.8534L3.45205 13.854C2.23762 13.854 1.25 12.8664 1.25 11.6519V8.34884C1.25 7.13441 2.23762 6.14678 3.45205 6.14678L7.17601 6.14663L20.6639 0.677983C20.8257 0.611921 21.0043 0.636144 21.1473 0.738539ZM20.3297 1.99371L7.85616 7.05196V12.947L20.3297 18.007V1.99371ZM24.5347 13.9465L27.8378 16.1485C28.0899 16.317 28.1593 16.6594 27.9908 16.9115C27.884 17.0712 27.7101 17.1571 27.5328 17.1571C27.4271 17.1571 27.3214 17.1273 27.2278 17.0646L23.9248 14.8625C23.6726 14.6941 23.6033 14.3516 23.7717 14.0995C23.9413 13.8463 24.2848 13.7791 24.5347 13.9465ZM6.75514 7.24781H3.45205C2.84429 7.24781 2.35103 7.74107 2.35103 8.34884V11.6519C2.35103 12.2597 2.84429 12.7529 3.45205 12.7529H6.75514V7.24781ZM27.5328 10.0004C27.8367 10.0004 28.0833 10.247 28.0833 10.5509C28.0833 10.8548 27.8367 11.1014 27.5328 11.1014H24.2297C23.9259 11.1014 23.6792 10.8548 23.6792 10.5509C23.6792 10.247 23.9259 10.0004 24.2297 10.0004H27.5328ZM27.9908 4.19026C28.1593 4.44239 28.091 4.78481 27.8378 4.95327L24.5347 7.15532C24.4411 7.21808 24.3354 7.24781 24.2297 7.24781C24.0525 7.24781 23.8785 7.16193 23.7717 7.00228C23.6033 6.75015 23.6715 6.40773 23.9248 6.23927L27.2278 4.03722C27.4789 3.86986 27.8213 3.93592 27.9908 4.19026Z"
										fill="white"
										stroke="white"
										stroke-width="0.9"
									/>
								</svg>
								<h1>Marketing Designs</h1>
							</div>
							<div className="shortcut-containers">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.165 5C13.165 4.44772 12.7173 4 12.165 4C11.6128 4 11.165 4.44772 11.165 5V11H5.16504C4.61275 11 4.16504 11.4477 4.16504 12C4.16504 12.5523 4.61275 13 5.16504 13H11.165V19C11.165 19.5523 11.6128 20 12.165 20C12.7173 20 13.165 19.5523 13.165 19V13H19.165C19.7173 13 20.165 12.5523 20.165 12C20.165 11.4477 19.7173 11 19.165 11H13.165V5Z"
										fill="#4D4D4D"
									/>
								</svg>
								<h1>Add new shortcut</h1>
							</div>
						</div>
						<div className="home-bottom-containers-right">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
								>
									<g opacity="0.8">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M22.8757 3.17979C22.5792 1.91401 21.4494 1 20.1289 1H11.872L11.6625 1.00786L11.4448 1.03268L11.2307 1.07427C9.96491 1.3708 9.0509 2.5006 9.0509 3.8211V4.16516H6.71145L6.47139 4.17148C4.32524 4.2847 2.58301 5.90632 2.58301 7.94957V27.2156L2.59011 27.4409C2.71733 29.4514 4.53721 31 6.71145 31H25.2894L25.5295 30.9937C27.6757 30.8805 29.4179 29.2589 29.4179 27.2156V7.94957L29.4108 7.72433C29.2836 5.71381 27.4637 4.16516 25.2894 4.16516H22.95V3.8211L22.9421 3.61162L22.9173 3.39391L22.8757 3.17979ZM22.95 6.22938V6.5734C22.95 7.8939 22.036 9.02369 20.7702 9.32023L20.5561 9.36182L20.3384 9.38664L20.1289 9.3945H11.872C10.5515 9.3945 9.42171 8.48049 9.12518 7.21471L9.08358 7.00059L9.05877 6.78287L9.0509 6.5734V6.22938H6.71145C5.61466 6.22938 4.7539 6.93715 4.65643 7.78841L4.64723 7.94957V27.2156C4.64723 28.0826 5.44347 28.8414 6.5087 28.9277L6.71145 28.9358H25.2894C26.3862 28.9358 27.247 28.228 27.3445 27.3768L27.3537 27.2156V7.94957C27.3537 7.08257 26.5574 6.32381 25.4922 6.23754L25.2894 6.22938H22.95ZM12.2844 2.58257H19.7165C20.4316 2.58257 21.0549 3.04134 21.281 3.70982L21.329 3.88116L21.3581 4.05779L21.3679 4.234L21.367 6.18732L21.3526 6.38289L21.3186 6.56136L21.2594 6.75038C21.0854 7.2058 20.7176 7.55909 20.2544 7.72017L20.0765 7.77138L19.8904 7.80244L19.7165 7.81193L12.2576 7.81106L12.0621 7.79665L11.8836 7.76264L11.6946 7.7035C11.2392 7.52948 10.8859 7.16167 10.7248 6.6985L10.6736 6.52053L10.6425 6.33448L10.633 6.16049L10.6339 4.20718L10.6483 4.01161L10.6823 3.83313L10.7415 3.64412C10.9155 3.1887 11.2833 2.83541 11.7465 2.67433L11.9244 2.62311L12.1105 2.59206L12.2844 2.58257Z"
											fill="#1A181E"
										/>
										<path
											d="M8.74113 16.9535C9.50149 16.9535 10.1179 16.3371 10.1179 15.5768C10.1179 14.8164 9.50149 14.2 8.74113 14.2C7.98077 14.2 7.36438 14.8164 7.36438 15.5768C7.36438 16.3371 7.98077 16.9535 8.74113 16.9535Z"
											fill="#1A181E"
										/>
										<path
											d="M12.8714 14.3176C12.1802 14.3176 11.6198 14.878 11.6198 15.5692C11.6198 16.2604 12.1802 16.8208 12.8714 16.8208H23.3848C24.0761 16.8208 24.6364 16.2604 24.6364 15.5692C24.6364 14.878 24.0761 14.3176 23.3848 14.3176H12.8714Z"
											fill="#1A181E"
										/>
										<path
											d="M11.6199 22.6435C11.6199 21.9523 12.1803 21.3919 12.8715 21.3919H23.3849C24.0761 21.3919 24.6365 21.9523 24.6365 22.6435C24.6365 23.3347 24.0761 23.8951 23.3849 23.8951H12.8715C12.1803 23.8951 11.6199 23.3347 11.6199 22.6435Z"
											fill="#1A181E"
										/>
										<path
											d="M8.74119 24.0278C9.50155 24.0278 10.1179 23.4114 10.1179 22.651C10.1179 21.8907 9.50155 21.2743 8.74119 21.2743C7.98083 21.2743 7.36443 21.8907 7.36443 22.651C7.36443 23.4114 7.98083 24.0278 8.74119 24.0278Z"
											fill="#1A181E"
										/>
									</g>
								</svg>
								<h1>13 pending orders worth ₹2,999</h1>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
								>
									<g opacity="0.8">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M1.33301 4.85901C1.33301 4.24356 1.82976 3.74463 2.44253 3.74463H20.9296C21.5423 3.74463 22.0391 4.24356 22.0391 4.85901V20.9513C22.0391 21.5667 21.5423 22.0656 20.9296 22.0656H2.44253C1.82976 22.0656 1.33301 21.5667 1.33301 20.9513V4.85901ZM3.55206 5.9734V19.8369H19.82V5.9734H3.55206Z"
											fill="#1A181E"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.82 11.0484C19.82 10.4329 20.3168 9.934 20.9295 9.934H25.8594C26.1537 9.934 26.4359 10.0514 26.644 10.2604L30.3414 13.974C30.5494 14.183 30.6663 14.4664 30.6663 14.762V20.9513C30.6663 21.5668 30.1696 22.0657 29.5568 22.0657L20.9296 22.0656C20.3168 22.0656 19.82 21.5668 19.82 20.9513V11.0484ZM22.0391 12.1628V19.8369H28.4473V15.2236L25.3998 12.1628H22.0391Z"
											fill="#1A181E"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.98856 22.0656C6.89966 22.0656 6.01692 22.9522 6.01692 24.0459C6.01692 25.1396 6.89966 26.0262 7.98856 26.0262C9.07747 26.0262 9.96021 25.1396 9.96021 24.0459C9.96021 22.9522 9.07747 22.0656 7.98856 22.0656ZM3.79787 24.0459C3.79787 21.7213 5.67411 19.8369 7.98856 19.8369C10.303 19.8369 12.1793 21.7213 12.1793 24.0459C12.1793 26.3705 10.303 28.255 7.98856 28.255C5.67411 28.255 3.79787 26.3705 3.79787 24.0459Z"
											fill="#1A181E"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M24.0107 22.0656C22.9218 22.0656 22.0391 22.9522 22.0391 24.0459C22.0391 25.1396 22.9218 26.0262 24.0107 26.0262C25.0996 26.0262 25.9824 25.1396 25.9824 24.0459C25.9824 22.9522 25.0996 22.0656 24.0107 22.0656ZM19.82 24.0459C19.82 21.7213 21.6963 19.8369 24.0107 19.8369C26.3252 19.8369 28.2014 21.7213 28.2014 24.0459C28.2014 26.3705 26.3252 28.255 24.0107 28.255C21.6963 28.255 19.82 26.3705 19.82 24.0459Z"
											fill="#1A181E"
										/>
									</g>
								</svg>
								<h1>8 orders to ship</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;