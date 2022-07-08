export type itemData = {
    item: itunesData
}

export type sectionData = {
    section: {
        title: string;
        data: itunesData[];
    }
}

export type itunesData = {
    artistId: number;
    artistName: string;
    trackName: string; 
    collectionName: string;
    artworkUrl100: string;
}