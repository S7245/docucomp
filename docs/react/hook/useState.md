# useState

```ts
import styles from './index.less';
import { connect } from '@umijs/max';

const Page = ({userinfo}) => {
  return (
    <div>
      <h1 className={userinfo}>Page index</h1>
    </div>
  );
}

export default Page;

// const mapStateToProps = ({userinfo}) => {
//   return {userinfo};
// }
// export default connect(mapStateToProps)(Page);

// const mapStateToProps = ({userinfo}) => ({userinfo});
// export default connect(({userinfo}) => ({userinfo}))(Page);

```