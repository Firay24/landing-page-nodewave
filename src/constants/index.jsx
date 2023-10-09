import bg1 from '@/images/bg1.png'
import bg2 from '@/images/bg2.png'
import thumnail1 from '@/images/Thumnail4.png'
import thumnail2 from '@/images/Thumnail5.png'
import icon1 from '@/images/icons/icon-1.png'
import icon2 from '@/images/icons/icon-2.png'
import icon3 from '@/images/icons/icon-3.png'
import iconA from '@/images/icons/icons-a.png'
import iconB from '@/images/icons/icons-b.png'
import iconC from '@/images/icons/icons-c.png'
import iconD from '@/images/icons/icons-d.png'
import iconE from '@/images/icons/icons-e.png'
import iconF from '@/images/icons/icons-f.png'
import product1 from '@/images/product1.png'
import product2 from '@/images/product2.png'
import saleIcon from '@/images/icons/sale.png'

export const navData = [
  { _id: 1, title: "Website", href: "#website"},
  { _id: 2, title: "Mobile App", href: "#mobileApp"},
  { _id: 3, title: "Portfolio", href: "#portfolio"},
]

export const testimoniData = [
  {
    name: "Ahmad Prasetyo",
    details: `Buat aplikasi sama tim ini emang luar biasa dicarikan
      solusi yang paling murah supaya bisa segera mulai
      aplikasi PPOB saya. 2 minggu udah jadi hasilnya
      saya tinggal fokus di promosi! Terima kasih Nodewave.`
  },
  {
    name: "Laras Ratnadewi",
    details: `Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
      ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
      tinggal cerita aja lewat zoom maunya buat website seperti apa,
      langsung dibuatin dengan cepat sama Nodewave.`
  },
  {
    name: "Yusuf Uwais",
    details: `Yang paling keren sih source codenya sekalian dikasih,
      pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
      develop lagi fitur2 baru untuk startup gw.
      Thanks a lot Nodewave supportnya!!`
  },
]

export const workData = [
  {
    title: "Rayu Motor",
    body: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
    img: thumnail1,
    bgImg: bg1
  },
  {
    title: "Rayu Mobil",
    body: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
    img: thumnail2,
    bgImg: bg2
  },
]

export const featuresData = [
  {
    icons: icon1,
    title: "Online Attendance",
    body: "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:",
    points: [
      "Clock in and Clock Out attendance",
      "Face Photo",
      "Face Recognition",
      "Accurate time stamp down to seconds",
      "GPS location of employees"
    ]
  },
  {
    icons: icon2,
    title: "Sport Center",
    body: "Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
    points: [
      "Choose a booking schedule",
      "Online payments",
      "Automatic scheduling system",
      "earch for Friends featur",
      "Split Payment with team members",
      "Information and announcements from you"
    ]
  },
  {
    icons: icon3,
    title: "Booking",
    body: "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
    points: [
      "Memilih jenis dan kategori jasa yang dikehendaki",
      "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital",
      "Penjadwalan dengan tim lapangan",
      "Aplikasi khusus untuk tim",
      "Promosi dan Kode voucher khusus"
    ]
  },
]

export const serviceData = [
  {
    title: 'E-commerce',
    icons: iconA
  },
  {
    title: 'Company Profile',
    icons: iconB
  },
  {
    title: 'Cashier',
    icons: iconC
  },
  {
    title: 'Chat',
    icons: iconD
  },
  {
    title: 'Workshop',
    icons: iconE
  },
  {
    title: 'Construction',
    icons: iconF
  },
]

export const priceData = [
  {
    title: "Website",
    isDiscount: true,
    before: "Rp, 1.000.000",
    after: "Rp, 500.000",
    img: product1,
    icons: saleIcon
  },
  {
    title: "Mobile Apps",
    isDiscount: false,
    price: "Rp, 999.000",
    img: product2,
  }
]