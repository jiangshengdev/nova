import { RedBlackTree } from "./index";

describe("red-black-tree", () => {
  test("init", () => {
    let origin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];

    let redBlackTree: RedBlackTree<number> = new RedBlackTree();

    origin.forEach((value) => {
      redBlackTree.add(value);
    });

    let len = origin.length;
    expect(redBlackTree.len()).toEqual(len);

    redBlackTree.traverseIn((value) => {
      result.push(value);
    });

    expect(result).toEqual(origin);

    for (let i = 0; i < len; i++) {
      redBlackTree.delete(origin[i]);
    }

    expect(redBlackTree.len()).toEqual(0);
  });

  test("change", () => {
    let redBlackTree: RedBlackTree<number> = new RedBlackTree();

    let len = 1000;
    for (let i = 0; i < len; i++) {
      redBlackTree.add(i);
    }

    expect(redBlackTree.len()).toEqual(len);

    for (let i = 0; i < len; i++) {
      redBlackTree.delete(i);
    }

    expect(redBlackTree.len()).toEqual(0);
  });

  test("mess", () => {
    let origin = [
      18, 73, 67, 64, 58, 71, 76, 5, 61, 27, 96, 95, 4, 32, 99, 72, 37, 87, 90,
      48, 70, 56, 57, 28, 74, 3, 41, 39, 59, 38, 94, 13, 35, 89, 7, 85, 81, 10,
      83, 49, 12, 97, 21, 15, 50, 65, 40, 55, 98, 86, 2, 100, 63, 75, 14, 9, 62,
      43, 69, 19, 0, 53, 80, 33, 47, 44,
    ];

    let redBlackTree: RedBlackTree<number> = new RedBlackTree();

    let len = origin.length;
    for (let i = 0; i < len; i++) {
      redBlackTree.add(origin[i]);
    }

    expect(redBlackTree.len()).toEqual(len);

    for (let i = 0; i < len; i++) {
      redBlackTree.delete(origin[i]);
    }

    expect(redBlackTree.len()).toEqual(0);
  });

  test("random", () => {
    let len = 1000;
    let origin = new Array(len).fill(0).map(() => Math.random());

    let redBlackTree: RedBlackTree<number> = new RedBlackTree();

    for (let i = 0; i < len; i++) {
      redBlackTree.add(origin[i]);
    }

    expect(redBlackTree.len()).toEqual(len);

    for (let i = 0; i < len; i++) {
      redBlackTree.delete(origin[i]);
    }

    expect(redBlackTree.len()).toEqual(0);
  });
});
