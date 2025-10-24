export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 py-12 text-zinc-900">
      <header className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-10 shadow-lg ring-1 ring-zinc-200">
        <h1 className="text-3xl font-bold tracking-tight">
          Data Structures Assignment Guide
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600">
          Submission Date: <span className="font-semibold">24/10/2025</span> ·
          No extensions · Write on A4 sheets (both sides) · Accuracy required.
        </p>
      </header>

      <main className="mx-auto mt-10 max-w-3xl space-y-12 rounded-3xl bg-white px-8 py-10 shadow-lg ring-1 ring-zinc-200">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-950">
            1. Arrays: Definition, Types, and Examples
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            An <span className="font-semibold">array</span> is a contiguous block
            of memory that stores a fixed-size sequence of elements of the same
            data type. Each element is addressed using its{" "}
            <span className="font-semibold">index</span>. Arrays enable constant
            time access, but inserting or deleting in the middle requires
            shifting elements.
          </p>
          <div className="mt-6 space-y-4 text-zinc-700">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                1.1 Static (Fixed-Size) Array
              </h3>
              <p className="mt-2 leading-7">
                Size decided at compile-time. Efficient for known, small data
                sets. Stored on the stack in languages like C/C++.
              </p>
              <CodeBlock
                language="cpp"
                title="C++: Basic Static Array Operations"
                code={`#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int marks[5] = {78, 85, 92, 68, 90};

    // Update element
    marks[3] = 74;

    // Traverse and print
    cout << "Marks: ";
    for (int score : marks) {
        cout << score << " ";
    }
    cout << "\\nHighest score: "
         << *max_element(begin(marks), end(marks));
    return 0;
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                1.2 Dynamic Array
              </h3>
              <p className="mt-2 leading-7">
                Grows or shrinks at runtime. Backed by resizable structures such
                as vectors, ArrayLists, or Python lists.
              </p>
              <CodeBlock
                language="python"
                title="Python: Dynamic Array with List"
                code={`grades = [72, 88, 91]
grades.append(95)        # push at end
grades.insert(1, 83)     # insert at index 1

if 72 in grades:
    grades.remove(72)    # delete by value

print("Class grades:", grades)
print("Average:", sum(grades) / len(grades))`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                1.3 Multidimensional Array
              </h3>
              <p className="mt-2 leading-7">
                Collection of arrays; common examples include 2D matrices.
              </p>
              <CodeBlock
                language="c"
                title="C: 2D Array Traversal"
                code={`#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int row = 0; row < 2; row++) {
        for (int col = 0; col < 3; col++) {
            printf("%d ", matrix[row][col]);
        }
        printf("\\n");
    }
    return 0;
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                1.4 Jagged Array
              </h3>
              <p className="mt-2 leading-7">
                Array of arrays where inner arrays can have different lengths.
                Useful for triangular or ragged datasets.
              </p>
              <CodeBlock
                language="cs"
                title="C#: Jagged Array Example"
                code={`using System;

class Program {
    static void Main() {
        int[][] triangle = {
            new int[] {1},
            new int[] {2, 3},
            new int[] {4, 5, 6}
        };

        foreach (var row in triangle) {
            Console.WriteLine(string.Join(" ", row));
        }
    }
}`}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-950">
            2. Stack: Operations and Applications
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            A <span className="font-semibold">stack</span> follows the LIFO
            (Last-In, First-Out) principle. Operations are performed at a single
            end, called the <span className="font-semibold">top</span>.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700">
            <li>
              <span className="font-semibold">push(x)</span> – insert element
              <code className="ml-1 rounded bg-zinc-100 px-1 text-sm">x</code>
              at the top.
            </li>
            <li>
              <span className="font-semibold">pop()</span> – remove and return
              the top element.
            </li>
            <li>
              <span className="font-semibold">peek()</span> – view the top
              element without removing it.
            </li>
            <li>
              <span className="font-semibold">isEmpty()</span> /{" "}
              <span className="font-semibold">isFull()</span> – check stack
              state, especially in array implementations.
            </li>
          </ul>

          <CodeBlock
            language="cpp"
            title="C++: Stack Implementation Using Array"
            code={`#include <iostream>
#define MAX 5
using namespace std;

class Stack {
    int top;
    int data[MAX];
public:
    Stack(): top(-1) {}

    bool push(int value) {
        if (top == MAX - 1) return false;
        data[++top] = value;
        return true;
    }

    bool pop(int &removed) {
        if (top == -1) return false;
        removed = data[top--];
        return true;
    }

    int peek() const {
        if (top == -1) throw runtime_error("Empty stack");
        return data[top];
    }
};

int main() {
    Stack scores;
    scores.push(10);
    scores.push(20);
    scores.push(30);

    int value;
    if (scores.pop(value)) {
        cout << "Popped: " << value << "\\n";
    }
    cout << "Top: " << scores.peek() << "\\n";
    return 0;
}`}
          />

          <div className="mt-6 space-y-4 text-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900">
              Applications (Conversions)
            </h3>
            <p className="leading-7">
              Expression conversion and evaluation rely on stacks to reverse
              operand order elegantly. Typical use cases include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Infix to Postfix/Prefix conversion</li>
              <li>Balanced parentheses validation</li>
              <li>Undo/Redo operations in text editors</li>
            </ul>
          </div>

          <CodeBlock
            language="python"
            title="Python: Infix to Postfix Conversion"
            code={`precedence = {"+": 1, "-": 1, "*": 2, "/": 2, "^": 3}

def infix_to_postfix(expression: str) -> str:
    output = []
    stack = []

    for token in expression:
        if token.isalnum():
            output.append(token)
        elif token == "(":
            stack.append(token)
        elif token == ")":
            while stack and stack[-1] != "(":
                output.append(stack.pop())
            stack.pop()
        else:
            while (stack and stack[-1] != "(" and
                   precedence[token] <= precedence[stack[-1]]):
                output.append(stack.pop())
            stack.append(token)

    while stack:
        output.append(stack.pop())
    return "".join(output)

print(infix_to_postfix("A+(B*C-(D/E^F)*G)*H"))`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-950">
            3. Queue: Operations and Variants
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            A <span className="font-semibold">queue</span> follows FIFO
            (First-In, First-Out). Elements enter at the{" "}
            <span className="font-semibold">rear</span> and leave from the{" "}
            <span className="font-semibold">front</span>.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700">
            <li>
              <span className="font-semibold">enqueue(x)</span> – add element to
              the rear.
            </li>
            <li>
              <span className="font-semibold">dequeue()</span> – remove element
              from the front.
            </li>
            <li>
              <span className="font-semibold">front()</span> /{" "}
              <span className="font-semibold">rear()</span> – inspect queue
              ends.
            </li>
          </ul>

          <CodeBlock
            language="java"
            title="Java: Linear Queue Using Circular Indexing"
            code={`import java.util.Arrays;

class LinearQueue {
    private final int[] data;
    private int front = 0;
    private int rear = -1;
    private int size = 0;

    LinearQueue(int capacity) {
        data = new int[capacity];
    }

    void enqueue(int value) {
        if (size == data.length) {
            throw new IllegalStateException("Overflow");
        }
        rear = (rear + 1) % data.length;
        data[rear] = value;
        size++;
    }

    int dequeue() {
        if (size == 0) {
            throw new IllegalStateException("Underflow");
        }
        int value = data[front];
        front = (front + 1) % data.length;
        size--;
        return value;
    }

    @Override
    public String toString() {
        return Arrays.toString(data) + " size=" + size;
    }

    public static void main(String[] args) {
        LinearQueue q = new LinearQueue(5);
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        System.out.println(q);
        System.out.println("Dequeued: " + q.dequeue());
        System.out.println(q);
    }
}`}
          />

          <div className="mt-6 space-y-4 text-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900">
              Queue Variants with Examples
            </h3>
            <div className="space-y-4 rounded-2xl border border-zinc-200 px-6 py-5">
              <Variant
                title="Circular Queue"
                description="Treats the array as circular to reuse freed spaces, eliminating false overflow."
                code={`class CircularQueue:
    def __init__(self, k):
        self.q = [None] * k
        self.front = self.rear = -1

    def enqueue(self, value):
        if (self.rear + 1) % len(self.q) == self.front:
            raise OverflowError("Queue full")
        if self.front == -1:
            self.front = 0
        self.rear = (self.rear + 1) % len(self.q)
        self.q[self.rear] = value
`}
              />
              <Variant
                title="Priority Queue"
                description="Dequeues based on priority instead of arrival order; implemented efficiently with heaps."
                code={`import heapq

tasks = []
heapq.heappush(tasks, (1, "Handle interrupts"))
heapq.heappush(tasks, (3, "Process logs"))
heapq.heappush(tasks, (2, "Serve request"))

while tasks:
    priority, task = heapq.heappop(tasks)
    print(priority, task)`}
              />
              <Variant
                title="Double-Ended Queue (Deque)"
                description="Supports insertion and deletion at both ends; used for sliding window and caching problems."
                code={`from collections import deque

window = deque()
window.append(10)   # add rear
window.appendleft(5)
print(list(window))  # [5, 10]
window.pop()         # remove rear
window.popleft()     # remove front`}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-950">
            4. Linked List: Types and Operations
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            A <span className="font-semibold">linked list</span> stores elements
            in nodes containing data and references. Insertions and deletions are
            efficient because only pointers change, not physical order in memory.
          </p>

          <div className="mt-6 space-y-4 text-zinc-700">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Core Operations
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold">Insertion:</span> at the
                  beginning, end, or between nodes by updating pointers.
                </li>
                <li>
                  <span className="font-semibold">Deletion:</span> remove a node
                  by bypassing it and freeing memory.
                </li>
                <li>
                  <span className="font-semibold">Traversal:</span> iterate from
                  head until <code>null</code> (or back to head in circular
                  lists).
                </li>
                <li>
                  <span className="font-semibold">Search:</span> compare keys
                  sequentially to find target data.
                </li>
              </ul>
            </div>

            <CodeBlock
              language="cpp"
              title="C++: Singly Linked List Operations"
              code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int value) : data(value), next(nullptr) {}
};

class SinglyLinkedList {
    Node* head = nullptr;
public:
    void insertFront(int value) {
        Node* node = new Node(value);
        node->next = head;
        head = node;
    }

    void insertBack(int value) {
        Node* node = new Node(value);
        if (!head) { head = node; return; }
        Node* temp = head;
        while (temp->next) temp = temp->next;
        temp->next = node;
    }

    void deleteValue(int value) {
        if (!head) return;
        if (head->data == value) {
            Node* toDelete = head;
            head = head->next;
            delete toDelete;
            return;
        }
        Node* cur = head;
        while (cur->next && cur->next->data != value) {
            cur = cur->next;
        }
        if (cur->next) {
            Node* toDelete = cur->next;
            cur->next = cur->next->next;
            delete toDelete;
        }
    }

    void display() const {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\\n";
    }
};

int main() {
    SinglyLinkedList list;
    list.insertBack(10);
    list.insertBack(20);
    list.insertFront(5);
    list.display();
    list.deleteValue(20);
    list.display();
    return 0;
}`}
            />

            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Types of Linked Lists
              </h3>
              <ul className="mt-3 space-y-4">
                <li>
                  <span className="font-semibold">Singly Linked List:</span>{" "}
                  Each node holds data and a pointer to the next node. Best for
                  simple, forward-only traversal.
                </li>
                <li>
                  <span className="font-semibold">Doubly Linked List:</span>{" "}
                  Nodes maintain <code>prev</code> and <code>next</code> links;
                  ideal for backtracking and deleting in constant time when node
                  reference is known.
                </li>
                <li>
                  <span className="font-semibold">Circular Linked List:</span>{" "}
                  The tail links back to the head, forming a loop for round-robin
                  scheduling and buffer management.
                </li>
              </ul>
            </div>

            <CodeBlock
              language="js"
              title="JavaScript: Doubly Linked List Skeleton"
              code={`class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  removeFromFront() {
    if (!this.head) return null;
    const value = this.head.data;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return value;
  }
}`}
            />
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white px-8 py-10 text-sm text-zinc-500 shadow-lg ring-1 ring-zinc-200">
        Ensure your handwritten submission mirrors these explanations, diagrams,
        and programs. Review thoroughly before writing to avoid rewrites.
      </footer>
    </div>
  );
}

type CodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

function CodeBlock({ title, language, code }: CodeBlockProps) {
  return (
    <figure className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50">
      <figcaption className="flex items-center justify-between border-b border-zinc-200 px-4 py-2 text-sm font-medium uppercase tracking-wide text-zinc-500">
        <span>{title}</span>
        <span>{language}</span>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-sm leading-6">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

type VariantProps = {
  title: string;
  description: string;
  code: string;
};

function Variant({ title, description, code }: VariantProps) {
  return (
    <div>
      <h4 className="text-base font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 leading-7 text-zinc-700">{description}</p>
      <pre className="mt-3 overflow-x-auto rounded-xl bg-zinc-100 p-4 text-sm leading-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}
