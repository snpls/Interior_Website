// Header 
export const Navlinks = [
    {
      navbarItem: 'About',
      href: '#'
    },
    {
      navbarItem: 'Service',
      href: '#service'
    },
    {
      navbarItem: 'Project',
      href: '#project'
    },
    {
      navbarItem: 'Contact',
      href: '#contact'
    }
  ]


//Sponsor
import bench from '@/assets/brand/1.png'
import facebook from '@/assets/brand/2.png'
import amazon from '@/assets/brand/3.png'
import morningshow from '@/assets/brand/4.png'
import reebook from '@/assets/brand/5.png'

export const sponsor = [
  bench, facebook, amazon, morningshow, reebook
]


//Service
import { AiFillDollarCircle } from "react-icons/ai"; 
import { IoIosCreate } from "react-icons/io"; 
import { FaCube } from "react-icons/fa"; 


export const services = [
  {
    logo: FaCube,
    title: 'Luxury Facilities',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, qui? Mollitia quasi.',
    link: '#'
  },
  {
    logo: IoIosCreate,
    title: 'Quality Products',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, qui? Mollitia quasi.',
    link: '#'
  },
  {
    logo: AiFillDollarCircle,
    title: 'Affordable Price',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, qui? Mollitia quasi.',
    link: '#'
  },
]


//Project
import image1 from '@/assets/banner.png';
import image2 from '@/assets/banner2.png';
import { StaticImageData } from "next/image";

type discData = {
  title:string,
  descprition:string,
  button:string,
  image:StaticImageData,
  numOfYears?: number,
  numOfClient?: number,
  numOfAward?: number,
}

export const discDatas: discData[] = [
  {
    title: 'We Believe that a team makes any project better',
    descprition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid',
    button: 'Discover Now',
    image: image1,
  },
  {
    title: 'Simple way to make stylish living room',
    descprition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid',
    button: 'Contact Us',
    numOfYears: 15,
    numOfClient: 350,
    numOfAward: 34,
    image: image2,
  },
]


//Testimonial
export const cardTestlDatas = [
  {
    profilePic: "https://i.pravatar.cc/300?img=1",
    name:'John Doe',
    position:'Designer',
    star:'⭐⭐⭐⭐⭐',
    comment:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  
  {
    profilePic: "https://i.pravatar.cc/300?img=2",
    name:'Alex',
    position:'Designer',
    star:'⭐⭐⭐⭐⭐',
    comment:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    profilePic: "https://i.pravatar.cc/300?img=3",
    name:'George',
    position:'Designer',
    star:'⭐⭐⭐⭐⭐',
    comment:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]