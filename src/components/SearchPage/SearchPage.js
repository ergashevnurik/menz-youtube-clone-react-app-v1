import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import '../SearchPage/SearchPage.css';
import ChannelRow from './component/ChannelRow/ChannelRow';
import VideoRow from './component/VideoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj" channel="Clever Programmer" verified subs="660K" numberOfVideos={382} description="You can find awesome programming videos" />
            <hr />

            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />
            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />
            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />
            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />
            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />
            <VideoRow title="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" description="СИМПСОНЫ - БЁРНС ПРОДАЁТ ЭЛЕКТРОСТАНЦИЮ | 3 CЕЗОН 11 СЕРИЯ" channel="NeoNato" views="105 тыс. просмотров" timeslamp="3 месяца назад" image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CNrOt4IG&rs=AOn4CLDCciN56EMZMdOw6PH16LDJSyhmzQ" subs="660K" />

        </div>
    )
}

export default SearchPage
