angular.module('Demo').factory('ImageData', function() {
    "use strict";

    console.log("recreating image data");

    var getPhotoList = function(that, albumId, suffix) {
        var result = [];
        var files = [];
        var albumDir;
        var albums = that.table.albums;

        for (var i = 0; i < albums.length; i++) {
            if (albums[i].id === albumId) {
                files = albums[i].files;
                albumDir = albums[i].dirname;
                break;
            }
        }
        for (i = 0; i < files.length; i++) {
            var filename = files[i];

            if (filename.indexOf(suffix) >= 0) {
                result.push("images/" + albumDir + '/' + filename);
            }
        }
        return result;
    };

    return {
        table: {
            albums: [
                {
                    id: '0',
                    dirname: "2014-03-15FresnoBlossoms",
                    timestamp: "2014-03-15",
                    name: "Fresno Blossoms",
                    latlong: [36.73379, -119.78466800000001],
                    files: [
                        "15869598683_1de2fb153e_o-1024x682large.jpg",
                        "15869598683_1de2fb153e_o-400x300small.jpg",
                        "15869598683_1de2fb153e_o-640x426medium.jpg",
                        "16302021388_a9ea9952fe_o-1024x682large.jpg",
                        "16302021388_a9ea9952fe_o-400x300small.jpg",
                        "16302021388_a9ea9952fe_o-640x426medium.jpg",
                        "16303821317_992800831b_o-1024x682large.jpg",
                        "16303821317_992800831b_o-400x300small.jpg",
                        "16303821317_992800831b_o-640x426medium.jpg",
                        "16303821487_b120b897bf_o-1024x682large.jpg",
                        "16303821487_b120b897bf_o-400x300small.jpg",
                        "16303821487_b120b897bf_o-640x426medium.jpg",
                        "16487995841_5d0dfca1be_o-1024x682large.jpg",
                        "16487995841_5d0dfca1be_o-400x300small.jpg",
                        "16487995841_5d0dfca1be_o-640x426medium.jpg",
                        "16489738575_f94e892814_o-1024x682large.jpg",
                        "16489738575_f94e892814_o-400x300small.jpg",
                        "16489738575_f94e892814_o-640x426medium.jpg",
                        "16489738915_8d7e7608ee_o-1024x682large.jpg",
                        "16489738915_8d7e7608ee_o-400x300small.jpg",
                        "16489738915_8d7e7608ee_o-640x426medium.jpg"
                    ]
                },
                {
                    id: '1',
                    dirname: "2014-05-04JoshuaTrees",
                    timestamp: "2014-05-04",
                    name: "Joshua Trees",
                    latlong: [33.873415, -115.90099199999997],
                    files: [
                        "15945489604_ddfca4c14f_o-1024x682large.jpg",
                        "15945489604_ddfca4c14f_o-400x300small.jpg",
                        "15945489604_ddfca4c14f_o-640x426medium.jpg",
                        "15945490244_d14aa1a23b_o-1024x682large.jpg",
                        "15945490244_d14aa1a23b_o-400x300small.jpg",
                        "15945490244_d14aa1a23b_o-640x426medium.jpg",
                        "15945491394_6deaebabdd_o-1024x682large.jpg",
                        "15945491394_6deaebabdd_o-400x300small.jpg",
                        "15945491394_6deaebabdd_o-640x426medium.jpg",
                        "15947857313_18a01d0db3_o-1024x682large.jpg",
                        "15947857313_18a01d0db3_o-400x300small.jpg",
                        "15947857313_18a01d0db3_o-640x426medium.jpg",
                        "15948892864_a87a306549_o-1024x682large.jpg",
                        "15948892864_a87a306549_o-400x300small.jpg",
                        "15948892864_a87a306549_o-640x426medium.jpg",
                        "16380381508_7fd1e4e83a_o-1024x682large.jpg",
                        "16380381508_7fd1e4e83a_o-400x300small.jpg",
                        "16380381508_7fd1e4e83a_o-640x426medium.jpg",
                        "16380384988_cb67aa5aaf_o-1024x682large.jpg",
                        "16380384988_cb67aa5aaf_o-400x300small.jpg",
                        "16380384988_cb67aa5aaf_o-640x426medium.jpg",
                        "16380594170_e688c619d1_o-1024x682large.jpg",
                        "16380594170_e688c619d1_o-400x300small.jpg",
                        "16380594170_e688c619d1_o-640x426medium.jpg",
                        "16380594640_2b67872dab_o-1024x682large.jpg",
                        "16380594640_2b67872dab_o-400x300small.jpg",
                        "16380594640_2b67872dab_o-640x426medium.jpg",
                        "16380594950_0edf6bdc68_o-1024x682large.jpg",
                        "16380594950_0edf6bdc68_o-400x300small.jpg",
                        "16380594950_0edf6bdc68_o-640x426medium.jpg",
                        "16380595790_b1eff6ca99_o-1024x682large.jpg",
                        "16380595790_b1eff6ca99_o-400x300small.jpg",
                        "16380595790_b1eff6ca99_o-640x426medium.jpg",
                        "16381757159_0dfb518e0b_o-1024x682large.jpg",
                        "16381757159_0dfb518e0b_o-400x300small.jpg",
                        "16381757159_0dfb518e0b_o-640x426medium.jpg",
                        "16381759649_d6cbd95dbe_o-1024x682large.jpg",
                        "16381759649_d6cbd95dbe_o-400x300small.jpg",
                        "16381759649_d6cbd95dbe_o-640x426medium.jpg",
                        "16381761589_7bb6b4b3de_o-1024x682large.jpg",
                        "16381761589_7bb6b4b3de_o-400x300small.jpg",
                        "16381761589_7bb6b4b3de_o-640x426medium.jpg",
                        "16382123227_e14199f9a3_o-1024x682large.jpg",
                        "16382123227_e14199f9a3_o-400x300small.jpg",
                        "16382123227_e14199f9a3_o-640x426medium.jpg",
                        "16382123237_a49521b44a_o-1024x682large.jpg",
                        "16382123237_a49521b44a_o-400x300small.jpg",
                        "16382123237_a49521b44a_o-640x426medium.jpg",
                        "16382123747_5541c1bfa9_o-1024x682large.jpg",
                        "16382123747_5541c1bfa9_o-400x300small.jpg",
                        "16382123747_5541c1bfa9_o-640x426medium.jpg",
                        "16385164179_81c6f566ed_o-1024x682large.jpg",
                        "16385164179_81c6f566ed_o-400x300small.jpg",
                        "16385164179_81c6f566ed_o-640x426medium.jpg",
                        "16542050396_95f19fb798_o-1024x682large.jpg",
                        "16542050396_95f19fb798_o-400x300small.jpg",
                        "16542050396_95f19fb798_o-640x426medium.jpg",
                        "16566389891_bc676ccf2b_o-1024x682large.jpg",
                        "16566389891_bc676ccf2b_o-400x300small.jpg",
                        "16566389891_bc676ccf2b_o-640x426medium.jpg",
                        "16566390391_a73578f83d_o-1024x682large.jpg",
                        "16566390391_a73578f83d_o-400x300small.jpg",
                        "16566390391_a73578f83d_o-640x426medium.jpg",
                        "16566391461_08b62d896c_o-1024x682large.jpg",
                        "16566391461_08b62d896c_o-400x300small.jpg",
                        "16566391461_08b62d896c_o-640x426medium.jpg",
                        "16566392051_1ee6a76ab8_o-1024x682large.jpg",
                        "16566392051_1ee6a76ab8_o-400x300small.jpg",
                        "16566392051_1ee6a76ab8_o-640x426medium.jpg",
                        "16566937482_a359560e56_o-1024x682large.jpg",
                        "16566937482_a359560e56_o-400x300small.jpg",
                        "16566937482_a359560e56_o-640x426medium.jpg",
                        "16566939232_56681cf838_o-1024x682large.jpg",
                        "16566939232_56681cf838_o-400x300small.jpg",
                        "16566939232_56681cf838_o-640x426medium.jpg",
                        "16568072565_72e55f1363_o-1024x682large.jpg",
                        "16568072565_72e55f1363_o-400x300small.jpg",
                        "16568072565_72e55f1363_o-640x426medium.jpg",
                        "16568075415_d65897a65a_o-1024x682large.jpg",
                        "16568075415_d65897a65a_o-400x300small.jpg",
                        "16568075415_d65897a65a_o-640x426medium.jpg",
                        "16568075705_229b1a2640_o-1024x682large.jpg",
                        "16568075705_229b1a2640_o-400x300small.jpg",
                        "16568075705_229b1a2640_o-640x426medium.jpg",
                        "16569792681_6eef67edcb_o-1024x682large.jpg",
                        "16569792681_6eef67edcb_o-400x300small.jpg",
                        "16569792681_6eef67edcb_o-640x426medium.jpg",
                        "16571471925_9c7e661a81_o-1024x682large.jpg",
                        "16571471925_9c7e661a81_o-400x300small.jpg",
                        "16571471925_9c7e661a81_o-640x426medium.jpg"
                    ]
                },
                {
                    id: '2',
                    dirname: "2014-07-05PlaceritaCanyonPark",
                    timestamp: "2014-07-05",
                    name: "Placerita Canyon Park",
                    latlong: [ 34.377374, -118.470125 ],
                    files: [
                        "15869409643_8991c37d15_o-1024x682large.jpg",
                        "15869409643_8991c37d15_o-400x300small.jpg",
                        "15869409643_8991c37d15_o-640x426medium.jpg",
                        "15869419883_55b268f7a3_o-1024x682large.jpg",
                        "15869419883_55b268f7a3_o-400x300small.jpg",
                        "15869419883_55b268f7a3_o-640x426medium.jpg",
                        "16303272909_a906301286_o-1024x682large.jpg",
                        "16303272909_a906301286_o-400x300small.jpg",
                        "16303272909_a906301286_o-640x426medium.jpg",
                        "16303278089_2e6ceb4770_o-1024x682large.jpg",
                        "16303278089_2e6ceb4770_o-400x300small.jpg",
                        "16303278089_2e6ceb4770_o-640x426medium.jpg",
                        "16303284189_f6d997afb3_o-1024x682large.jpg",
                        "16303284189_f6d997afb3_o-400x300small.jpg",
                        "16303284189_f6d997afb3_o-640x426medium.jpg",
                        "16303646857_dcbb90afb6_o-1024x682large.jpg",
                        "16303646857_dcbb90afb6_o-400x300small.jpg",
                        "16303646857_dcbb90afb6_o-640x426medium.jpg",
                        "16303654357_f418408930_o-1024x682large.jpg",
                        "16303654357_f418408930_o-400x300small.jpg",
                        "16303654357_f418408930_o-640x426medium.jpg",
                        "16463539436_170c30d51c_o-1024x682large.jpg",
                        "16463539436_170c30d51c_o-400x300small.jpg",
                        "16463539436_170c30d51c_o-640x426medium.jpg",
                        "16463573836_f9dc7772a2_o-1024x682large.jpg",
                        "16463573836_f9dc7772a2_o-400x300small.jpg",
                        "16463573836_f9dc7772a2_o-640x426medium.jpg",
                        "16488567772_afb39228b1_o-1024x682large.jpg",
                        "16488567772_afb39228b1_o-400x300small.jpg",
                        "16488567772_afb39228b1_o-640x426medium.jpg"
                    ]
                }
            ]
        },
        getAlbumsWithLocation: function () {
            var result = [];
            var albums = this.table.albums;

            for (var i = 0; i < albums.length; i++) {
                result.push({
                    name: albums[i].name,
                    latlong: albums[i].latlong
                });
            }
            return result;
        },
        getMainPhotos: function (albumId) {
            var result = getPhotoList(this, albumId, "-1024x682large.jpg");

            return result;
        },
        getThumbnails: function (albumId) {
            var result = getPhotoList(this, albumId, "-400x300small.jpg");

            return result;
        },
        getStream: function (rangeBegin, rangeEnd) {
            var result = getPhotoList(this, '0', "-640x426medium.jpg");

            result = result.concat(getPhotoList(this, '1', "-640x426medium.jpg"));
            result = result.concat(getPhotoList(this, '2', "-640x426medium.jpg"));

            return result;
        }
    };
});