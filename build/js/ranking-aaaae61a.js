String.prototype.score=function(t){if(0===t.length)return.9;if(t.length>this.length)return 0;for(var r=t.length;r>0;r--){var e=t.substring(0,r),n=this.indexOf(e);if(!(0>n||n+t.length>this.length)){var h=this.substring(n+e.length),i=null;i=r>=t.length?"":t.substring(r);var s=h.score(i,n);if(s>0){var g=this.length-h.length;if(0!==n){var l=0,f=this.charCodeAt(n-1);if(32===f||9===f)for(l=n-2;l>=0;l--)f=this.charCodeAt(l),g-=32===f||9===f?1:.15;else g-=n}return g+=s*h.length,g/=this.length}}}return 0};