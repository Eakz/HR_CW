// https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist
        this.participants = []
    }
    howMany(a) {
        let filtered = [...new Set(a.map(e => e.toLowerCase()).filter(el => !this.participants.includes(el)))]
        this.participants = [...this.participants, ...filtered]
        return filtered.length
    }
}