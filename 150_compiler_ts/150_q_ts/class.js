"use strict";
// class ActivityMerger {
//     private posts: Activity[] = [];
//     private reposts: Activity[] = [];
//     setPosts(posts: Activity[]): this {
//         this.posts = posts;
//         return this;
//     }
//     setReposts(reposts: Activity[]): this {
//         this.reposts = reposts;
//         return this;
//     }
//     merge(): Activity[] {
//         const m = this.posts.length;
//         const n = this.reposts.length;
//         const result = new Array(m + n).fill(null);
//         // Реализация слияния, как выше
//         return result;
//     }
// }
// // Использование:
// const merged = new ActivityMerger()
//     .setPosts(posts)
//     .setReposts(reposts)
//     .merge();
