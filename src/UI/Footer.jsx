import { FaUserCog } from "react-icons/fa";
import {
	FaBriefcase,
	FaCircleQuestion,
	FaInstagram,
	FaLinkedinIn,
	FaMoneyBill1,
	FaPhone,
	FaXTwitter,
} from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";

import { Link } from "react-router-dom";

const socialLinks = [
	{
		id: 1,
		title: "Instagram",
		link: "https://instagram.com/tobechukwu.4.God",
		icon: <FaInstagram />,
	},
	{
		id: 2,
		title: "X",
		link: "https://x.com/xcodes_tech",
		icon: <FaXTwitter />,
	},
	{
		id: 3,
		title: "LinkedIn",
		link: "https://linkedin.com/",
		icon: <FaLinkedinIn />,
	},
];

const footerLinks = [
	{
		id: 1,
		title: "blog posts",
		link: "#",
		icon: <PiChats />,
	},
	{
		id: 2,
		title: "about us",
		link: "#",
		icon: <FaBriefcase />,
	},
	{
		id: 1,
		title: "our location",
		link: "#",
		icon: <MdLocationPin />,
	},
];

const legalLinks = [
	{
		id: 1,
		title: "terms and conditions",
		link: "#",
		icon: <IoIosDocument />,
	},
	{
		id: 2,
		title: "privacy and policy",
		link: "#",
		icon: <FaUserCog />,
	},
	{
		id: 3,
		title: "company reviews",
		link: "#",
		icon: <VscFeedback />,
	},
];

const supportLinks = [
	{
		id: 1,
		title: "FAQs",
		link: "#",
		icon: <FaCircleQuestion />,
	},
	{
		id: 2,
		title: "contact us",
		link: "#",
		icon: <FaPhone />,
	},
	{
		id: 1,
		title: "pricing",
		link: "#",
		icon: <FaMoneyBill1 />,
	},
];

function SocialLink({ social }) {
	return (
		<Link
			to={social.link}
			className='w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black text-2xl font-semibold'
			title={social.title}>
			{social.icon}
		</Link>
	);
}

function FooterLink({ link }) {
	return (
		<Link className='flex items-center gap-4 text-white text-xl py-2'>
			{link.icon}
			<span className='capitalize'>{link.title}</span>
		</Link>
	);
}

function Footer() {
	return (
		<footer className='bg-[var(--blue-primary)] w-full text-white p-6'>
			<div className='flex flex-wrap'>
				<div className='mb-4 w-full md:w-1/4 p-2 mx-auto'>
					<div className='w-full flex items-center gap-6 mb-6'>
						<Link
							to='/'
							className='flex items-center gap-6 '>
							<img
								src='StandAloneLogo.svg'
								alt='Fluxdevs'
							/>
						</Link>
						<p className='text-lg md:text-sm text-[#e1e1f4]'>
							Building products that meets users needs.
						</p>
					</div>
					<div className='flex items-center gap-4'>
						{socialLinks.map((social) => (
							<SocialLink
								social={social}
								key={social.id}
							/>
						))}
					</div>
				</div>

				<div className='mb-4 w-full md:w-1/4 p-2 mx-auto'>
					<h3 className='text-lg font-semibold capitalize'>links</h3>
					{footerLinks.map((link) => (
						<FooterLink
							link={link}
							key={link.id}
						/>
					))}
				</div>

				<div className='mb-4 w-full md:w-1/4 p-2 mx-auto'>
					<h3 className='text-lg font-semibold capitalize'>legal</h3>
					{legalLinks.map((link) => (
						<FooterLink
							link={link}
							key={link.id}
						/>
					))}
				</div>

				<div className='mb-4 w-full md:w-1/4 p-2 mx-auto'>
					<h3 className='text-lg font-semibold capitalize'>
						support
					</h3>
					{supportLinks.map((link) => (
						<FooterLink
							link={link}
							key={link.id}
						/>
					))}
				</div>
			</div>

			<div className='w-full md:w-1/2 mt-10 text-white font-medium text-center mx-auto text-md md:text-lg'>
				<p>
					&copy; {new Date().getFullYear()} FluxDevs. Copyright and
					all Rights Reserved.
				</p>
				<p>Terms and Conditions</p>
			</div>
		</footer>
	);
}
export default Footer;
