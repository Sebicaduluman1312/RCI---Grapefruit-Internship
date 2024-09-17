import styles from './Skeleton.module.scss';

import { Skeleton, Space } from 'antd';


const SkeletonComponent = () => {
    return ( 
        <div className={styles.skeleton}>
            <div className={styles.navSkeleton}>
                <Skeleton.Button active={true} shape='round' />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Skeleton active paragraph={{ rows: 2 }} />
            <br />
            <br />

            <Space>
                <Skeleton.Button active size='default' shape='round' block={false} />
                <Skeleton.Button active size='default' shape='round' block={false} />
                <Skeleton.Button active size='default' shape='round' block={false} />
            </Space>

            <br />
            <br />

            <Space>
                <Skeleton.Button active size='default' shape='round' block={false} />
                <Skeleton.Button active size='default' shape='round' block={false} />
            </Space>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Space>
                <Skeleton.Button active size='large' shape='round' block={false} />
            </Space>

        </div>
    );
}
 
export default SkeletonComponent;