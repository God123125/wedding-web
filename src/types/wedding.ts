export interface CoupleInfo {
  groomName: string;
  groomTitle: string;
  groomBio: string;
  groomImage: string;
  brideName: string;
  brideTitle: string;
  brideBio: string;
  brideImage: string;
  weddingDate: string; // ISO date string or formatted date
  weddingTime: string;
  venueName: string;
  venueAddress: string;
  venueNote: string;
  googleMapsUrl: string;
  dressCode: string;
}

export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  description: string;
  icon: "ceremony" | "reception" | "photography" | "dinner";
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "engagement" | "travels" | "moments";
  caption: string;
  imageUrl: string;
  likes: number;
}

export interface RsvpSubmission {
  id: string;
  fullName: string;
  email: string;
  guestCount: number;
  attendance: "accept" | "decline";
  dietary?: string;
  message?: string;
  submittedAt: string;
}

export interface GiftDetails {
  title: string;
  message: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  routingNumber: string;
  zelleOrVenmo: string;
  honeymoonGoal: string;
}
