import icon_person from '../../assets/icon_person.png'
import icon_people from '../../assets/icon_people.png'
import icon_file from '../../assets/icon_file.png'
import icon_archive from '../../assets/icon_archive.png'
import icon_brush from '../../assets/icon_brush.png'
import icon_trash from '../../assets/icon_trash.png'
import icon_radio from '../../assets/icon_radio.png'
import icon_checkmark from '../../assets/icon_checkmark.png'
import icon_text from '../../assets/icon_text.png'
import icon_calendar from '../../assets/icon_calendar.png'
import icon_sign_1 from '../../assets/icon_sign-1.png'
import icon_sign from '../../assets/icon_sign.png'
import icon_gallery from '../../assets/icon_gallery.png'
// active
import icon_gallery_purple from '../../assets/icon_gallery_purple.png'
import icon_sign_purple from '../../assets/icon_sign_purple.png'
import icon_sign_1_purple from '../../assets/icon_sign_1_purple.png'
import icon_calendar_purple from '../../assets/icon_calendar_purple.png'
import icon_checkmark_purple from '../../assets/icon_checkmark_purple.png'
import icon_person_purple from '../../assets/icon_person_purple.png'


export const menuData = [
  { title: "自己簽署", icon: icon_person },
  { title: "邀請簽署", icon: icon_people },
  { title: "範本", icon: icon_file },
  { title: "封存", icon: icon_archive },
  { title: "草稿", icon: icon_brush },
  { title: "垃圾桶", icon: icon_trash },
];


export const menuData2 = [
  { title: "文件", icon: icon_gallery, active: icon_gallery_purple, },
  { title: "簽名", icon: icon_sign, active: icon_sign_purple,  },
  { title: "圖像", icon: icon_sign_1, active: icon_sign_1_purple,  },
  { title: "日期", icon: icon_calendar, active: icon_calendar_purple, },
  { title: "文字", icon: icon_text, active: icon_text,  },
  { title: "核取方塊", icon: icon_checkmark, active: icon_checkmark_purple, },
  { title: "選擇鈕", icon: icon_radio, active: icon_radio,  },
  { title: "我的檔案", icon: icon_person, active: icon_person_purple,  },
];  