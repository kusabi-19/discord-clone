export interface InitalUserStatre {
  user :null | {
    uid : string,
    photo : string,
    email : string,
    displayName : string,
  }
}

export interface InitalChannelStatre {
  channelId : string | null;
  channelName : string | null;
}